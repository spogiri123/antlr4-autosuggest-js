// jshint ignore: start
var antlr4 = require('antlr4/index');
var r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Listener = require('./r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Listener').r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Listener;
var grammarFileName = "r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0003\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0005\u0002\u0004\u0003",
    "\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0003\u0003",
    "\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "AB" ];

var ruleNames =  [ "r" ];

function r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.prototype = Object.create(antlr4.Parser.prototype);
r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.prototype.constructor = r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser;

Object.defineProperty(r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.EOF = antlr4.Token.EOF;
r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.AB = 1;

r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.RULE_r = 0;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.AB = function() {
    return this.getToken(r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.AB, 0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Listener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Listener ) {
        listener.exitR(this);
	}
};




r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.RContext = RContext;

r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser.AB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser = r_AB_AB_AB_fragmentA__Q_A_Q___Q_a_Q__fragmentB__Q_B_Q___Q_b_Q_Parser;
