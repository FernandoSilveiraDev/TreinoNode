var somaFunc = require ("./somar.js");
var subFunc = require("./sub.js");
var divFunc = require("./div.js");
var multiFunc = require("./multi");



var value1 = 10;
var value2 = 5;



console.log("Resultr sum "+value1+"+"+value2+": "+ somaFunc(value1,value2));

console.log("Resultr sub "+value1+"-"+value2+": "+ subFunc(value1,value2));

console.log("Resultr divsion "+value1+"/"+value2+": "+ divFunc(value1,value2));

console.log("Resultr multi "+value1+"*"+value2+": "+ multiFunc(value1,value2));
