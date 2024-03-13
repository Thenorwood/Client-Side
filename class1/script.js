(function  newFunc() {
    console.log("Hello World");

    //var creates variables
    
    var myScriptMyVar = 5;
    var myScriptName = "Bryn";
    
    console.log(myScriptName + " " + myScriptMyVar); //doesnt like name name means something. global scope.
    //thus. also referrs to global scope. already has vara=iable sautomatically set in global scope
    //creating mor evaraible sadds to global scope
    
    alert("POPUP!"); //no equal sign in popup. casn change scope of alert by assigning it as a variable. will break alert


}



//IIFE(immediately invoked function expression) .. first set of braces defines function, second invokes it 

)();
// always want code in an IIFE




