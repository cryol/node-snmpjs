/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"message":3,"SEQUENCE":4,"integer":5,"content":6,"string":7,"pdu":8,"v3_header":9,"v3_sec":10,"v3_pdu":11,"scoped_pdu":12,"std_pdu_tag":13,"varbind_list":14,"obsolete_trap_pdu_tag":15,"oid":16,"ip_address":17,"time_ticks":18,"varbind_list_v1":19,"CONTEXT_CONSTRUCTED_0":20,"CONTEXT_CONSTRUCTED_1":21,"CONTEXT_CONSTRUCTED_2":22,"CONTEXT_CONSTRUCTED_3":23,"CONTEXT_CONSTRUCTED_5":24,"CONTEXT_CONSTRUCTED_6":25,"CONTEXT_CONSTRUCTED_7":26,"CONTEXT_CONSTRUCTED_8":27,"CONTEXT_CONSTRUCTED_4":28,"varbinds":29,"varbind":30,"value":31,"object_syntax":32,"null":33,"simple_syntax":34,"application_syntax":35,"data":36,"INTEGER":37,"OCTET_STRING":38,"OBJECT_IDENTIFIER":39,"IP_ADDRESS":40,"TIME_TICKS":41,"NULL":42,"DATA":43,"$accept":0,"$end":1},
terminals_: {2:"error",4:"SEQUENCE",20:"CONTEXT_CONSTRUCTED_0",21:"CONTEXT_CONSTRUCTED_1",22:"CONTEXT_CONSTRUCTED_2",23:"CONTEXT_CONSTRUCTED_3",24:"CONTEXT_CONSTRUCTED_5",25:"CONTEXT_CONSTRUCTED_6",26:"CONTEXT_CONSTRUCTED_7",27:"CONTEXT_CONSTRUCTED_8",28:"CONTEXT_CONSTRUCTED_4",37:"INTEGER",38:"OCTET_STRING",39:"OBJECT_IDENTIFIER",40:"IP_ADDRESS",41:"TIME_TICKS",42:"NULL",43:"DATA"},
productions_: [0,[3,3],[6,2],[6,3],[9,5],[10,1],[11,1],[11,1],[12,4],[8,5],[8,7],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,1],[19,2],[19,1],[19,0],[14,2],[14,0],[29,2],[29,1],[30,3],[31,1],[31,1],[32,1],[32,1],[34,1],[34,1],[34,1],[35,1],[35,1],[35,1],[5,1],[7,1],[16,1],[17,1],[18,1],[33,1],[36,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$
/**/) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
		var msg = yy.message.createMessage({ version: $$[$0-1],
		    community: $$[$0].community, pdu: $$[$0].pdu });
		yy.setContent(msg);
	
break;
case 2:
		this.$ = {
			community: $$[$0-1],
			pdu: $$[$0]
		};
	
break;
case 3:
		throw new RangeError('SNMPv3 is not supported yet');
	
break;
case 9:
		this.$ = yy.pdu.createPDU({ op: $$[$0-4], request_id: $$[$0-3],
		    varbinds: $$[$0] });
		this.$.error_status = $$[$0-2];
		this.$.error_index = $$[$0-1];
	
break;
case 10:
		this.$ = yy.pdu.createPDU({ op: $$[$0-6], varbinds: $$[$0] });
		this.$.enterprise = $$[$0-5];
		this.$.agent_addr = $$[$0-4];
		this.$.generic_trap = $$[$0-3];
		this.$.specific_trap = $$[$0-2];
		this.$.time_stamp = $$[$0-1];
	
break;
case 11: this.$ = yy.pdu.GetRequest; 
break;
case 12: this.$ = yy.pdu.GetNextRequest; 
break;
case 13: this.$ = yy.pdu.Response; 
break;
case 14: this.$ = yy.pdu.SetRequest; 
break;
case 15: this.$ = yy.pdu.GetBulkRequest; 
break;
case 16: this.$ = yy.pdu.InformRequest; 
break;
case 17: this.$ = yy.pdu.SNMPv2_Trap; 
break;
case 18: this.$ = yy.pdu.Report; 
break;
case 19: this.$ = yy.pdu.Trap; 
break;
case 20:
		this.$ = $$[$0];
	
break;
case 23:
		this.$ = $$[$0];
	
break;
case 25:
		this.$ = $$[$0-1];
		this.$.push($$[$0]);
	
break;
case 26:
		this.$ = [ $$[$0] ];
	
break;
case 27:
		this.$ = yy.varbind.createVarbind({ oid: $$[$0-1], data: $$[$0] });
	
break;
case 38:
		var reader = new yy.ASN1.Reader(yytext);
		this.$ = yy.data.createData({ value: reader, type: 'Integer' });
	
break;
case 39:
		var reader = new yy.ASN1.Reader(yytext);
		this.$ = yy.data.createData({ value: reader,
		    type: 'OctetString' });
	
break;
case 40:
		var reader = new yy.ASN1.Reader(yytext);
		this.$ = yy.data.createData({ value: reader,
		    type: 'ObjectIdentifier'});
	
break;
case 41:
		var reader = new yy.ASN1.Reader(yytext);
		this.$ = yy.data.createData({ value: reader,
		    type: 'IpAddress' });
	
break;
case 42:
		var reader = new yy.ASN1.Reader(yytext);
		this.$ = yy.data.createData({ value: reader,
		    type: 'TimeTicks' });
	
break;
case 43:
		var reader = new yy.ASN1.Reader(yytext);
		this.$ = yy.data.createData({ value: reader, type: 'Null' });
	
break;
case 44:
		var reader = new yy.ASN1.Reader(yytext);
		this.$ = yy.data.createData({ value: reader });
	
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:3,37:[1,4]},{4:[1,9],6:5,7:6,9:7,38:[1,8]},{1:[2,38],4:[2,38],37:[2,38],38:[2,38],41:[2,38]},{1:[2,1]},{8:10,13:11,15:12,20:[1,13],21:[1,14],22:[1,15],23:[1,16],24:[1,17],25:[1,18],26:[1,19],27:[1,20],28:[1,21]},{7:23,10:22,38:[1,8]},{1:[2,39],4:[2,39],20:[2,39],21:[2,39],22:[2,39],23:[2,39],24:[2,39],25:[2,39],26:[2,39],27:[2,39],28:[2,39],37:[2,39],38:[2,39]},{5:24,37:[1,4]},{1:[2,2]},{5:25,37:[1,4]},{16:26,39:[1,27]},{37:[2,11]},{37:[2,12]},{37:[2,13]},{37:[2,14]},{37:[2,15]},{37:[2,16]},{37:[2,17]},{37:[2,18]},{39:[2,19]},{4:[1,31],7:30,11:28,12:29,38:[1,8]},{4:[2,5],38:[2,5]},{5:32,37:[1,4]},{5:33,37:[1,4]},{17:34,40:[1,35]},{1:[2,40],4:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],42:[2,40],43:[2,40]},{1:[2,3]},{1:[2,6]},{1:[2,7]},{7:36,38:[1,8]},{7:37,38:[1,8]},{5:38,37:[1,4]},{5:39,37:[1,4]},{1:[2,41],4:[2,41],37:[2,41]},{7:40,38:[1,8]},{5:41,37:[1,4]},{1:[2,24],4:[1,43],14:42},{5:44,37:[1,4]},{8:45,13:11,15:12,20:[1,13],21:[1,14],22:[1,15],23:[1,16],24:[1,17],25:[1,18],26:[1,19],27:[1,20],28:[1,21]},{38:[2,4]},{1:[2,9]},{4:[1,48],29:46,30:47},{18:49,41:[1,50]},{1:[2,8]},{1:[2,23],4:[1,48],30:51},{1:[2,26],4:[2,26]},{16:52,39:[1,27]},{1:[2,22],4:[1,54],19:53},{1:[2,42],4:[2,42]},{1:[2,25],4:[2,25]},{5:61,7:62,16:63,17:64,18:65,31:55,32:56,33:57,34:58,35:59,36:66,37:[1,4],38:[1,8],39:[1,27],40:[1,35],41:[1,50],42:[1,60],43:[1,67]},{1:[2,10]},{1:[2,21],4:[1,48],29:68,30:47},{1:[2,27],4:[2,27]},{1:[2,28],4:[2,28]},{1:[2,29],4:[2,29]},{1:[2,30],4:[2,30]},{1:[2,31],4:[2,31]},{1:[2,43],4:[2,43]},{1:[2,32],4:[2,32]},{1:[2,33],4:[2,33]},{1:[2,34],4:[2,34]},{1:[2,35],4:[2,35]},{1:[2,36],4:[2,36]},{1:[2,37],4:[2,37]},{1:[2,44],4:[2,44]},{1:[2,20],4:[1,48],30:51}],
defaultActions: {5:[2,1],10:[2,2],13:[2,11],14:[2,12],15:[2,13],16:[2,14],17:[2,15],18:[2,16],19:[2,17],20:[2,18],21:[2,19],28:[2,3],29:[2,6],30:[2,7],41:[2,4],42:[2,9],45:[2,8],53:[2,10]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};

function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}