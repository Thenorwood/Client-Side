console.log(newVar);

var newVar=("hallo");

//declaring a variable, assigning it a value,declarations get hoised when declaration is below console.log
//dont rely on hoisting declare variables first
//function definitions also hoisted
//IIFE stays right where you put it
//avoid declaring variablkes that have already been used

//seven basic types of variable
/* number
string
boolean
null
object
symbol
undefined
bigint
*/

//javascript dynamically typed language

//split can be used to split a string variable into its letters. x.split().... doesnt work on numbers


sayHi();

console.log(x);


function sayHi(){
    console.log("hi");
}

(function(){
    console.log("SayHiFirst");
})();

var myFun = function(){ //only declaraiton gets hoisted, the rest doesnt work if calling is above.
    console.log("yo");
}
myFun();

var x = 5;// only declaration is hjoisted

//null and undefined basically mean same thing. comouter uses undefined, we use null
//undefined != null

//to find undefined, use "x" === undefined