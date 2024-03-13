
(function(){
    var myVar = 10;

    var sayHi = function() {
        console.log("Hi");
    };

    sayHi();//call function
    console.log(myVar);


    

    }
)();
myObj = {//objects... 2d arrays can store lots of things
    name: "bryn",
    sweater:"fart",
    shirt:"zing",
    height: 1000,
    class:{
        name: "prog2700",
        section: "1000",
        students:["bryn", "is", "god"],
        learn: function(){
            console.log("learning");
        }
    },
    teach: function(){
        console.log("stay oput of global scope");
    }
};
student =[{
    name:"fart",
    location:"my butt"},
        {
    name:"wiggler",
    location:"nuthouse"}
    ];

console.log(JSON.stringify(myObj)); //JSON stringify prints out contents of objects in json format

var thing =`{
    name:"fart",
    location:"my butt"},
        {
    name:"wiggler",
    location:"nuthouse"}`;

var thingOBJ = JSON.parse(thing);