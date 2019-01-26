/*
 * Copyright (c) 2015 Jan Van Buggenhout.  All rights reserved.
 * Copyright (c) 2013 Joyent, Inc.  All rights reserved.
 */

var dgram = require('dgram');
var util = require('util');
var events = require('events');
var PDU = require('./protocol/pdu');
var message = require('./protocol/message');

function
Receiver(options)
{
	if (typeof (options) !== 'object')
		throw new TypeError('options (object) is required');
	if (typeof (options.log) !== 'object')
		throw new TypeError('options.log (object) is required');

	this._log = options.log;
	this._name = options.name || 'snmpjs';

	this._malformed_messages = 0;
}
util.inherits(Receiver, events.EventEmitter);

Receiver.prototype._process_msg = function _process_msg(msg) {
	this._log.debug({
		raw: msg.raw,
		origin: msg.src,
		snmpmsg: msg
	    }, 'Ignoring PDU of inappropriate type %s', PDU.strop(msg.pdu.op));
};

Receiver.prototype._augment_msg = function _augment_msg(msg, conn) {
};


Receiver.prototype._resp = function _resp(raw, src, conn) {
    var req = message.parseMessage({
        raw: raw,
        src: src
    });
    var rsp;

    rsp = message.createMessage({ version: req.version,
        community: req.community });
    rsp.dst = req.src;

    rsp.pdu = PDU.createPDU({
        op: PDU.Response,
        request_id: req.pdu.request_id,
        varbinds: req.pdu.varbinds
    });
    rsp.pdu.error_status = 0;
    rsp.pdu.error_index = 0;

    var dst = rsp.dst;
    var local_sock = false;

    rsp.encode();

    if (!conn) {
        conn = dgram.createSocket(dst.family);
        local_sock = false;
    }
    conn.send(rsp.raw.buf, 0, rsp.raw.len, dst.port, dst.address,
        function (err, len) {
        if (local_sock)
            conn.close();
        });
};


Receiver.prototype._recv = function _recv(raw, src, conn) {
	var msg;

	try {
		msg = message.parseMessage({ raw: raw, src: src });
		self._resp(raw, src, conn);
	} catch (err) {
		this._malformed_messages++;
		var errData = {
			err: err,
			raw: raw,
			origin: src
		};
		this._log.warn(errData, 'Invalid SNMP message');
		this.emit('invalidMessage', errData);
		return;
	}

  try {
    this._augment_msg(msg, conn);
    this._log.trace({ raw: raw, origin: src, snmpmsg: msg },
        'Received SNMP message');
    this.emit('message', msg);
    this._process_msg(msg);
  }
  catch (err) {
    var errData = {
      err: err,
      message: msg,
      origin: src,
    };
    this._log.warn(errData, 'Error processing message');
    this.emit('messageError', errData);
  }
};

Receiver.prototype.createSocket = function createSocket(family) {
	var self = this;
	var conn;

	if (typeof (family) !== 'string')
		throw new TypeError('family (string) is required');

	conn = dgram.createSocket(family);
	conn.on('message', function _recv_binder(msg, rinfo) {
		var raw = {
			buf: msg,
			len: rinfo.size
		};
		var src = {
			family: family,
			address: rinfo.address,
			port: rinfo.port
		};
		self._recv(raw, src, conn);
	});

	return (conn);
};

module.exports = Receiver;
