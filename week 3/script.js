const arr = [
    {
        name: "fartt",
        age: 2222
    },
    {
        name: "bunt",
        age: 21345
    },
    {
        name: "Chandelfgkj",
        age:12
    },

]
//check if evereyone is of age

const ofAge = (arr) => {
    let ageFlag = true;
    for(let i=0; i<arr.length; i++){
    if (arr[i].age <18) {
        return false;

    }
   
}
return true;
}
//console.log(ofAge(arr));
console.log(arr.every((person)=>/*implicit return*/ person.age >=18));

//find 1str perosn of age

console.log();
const findFirstAge = (arr) => {
    let ageFlag = true;
    for(let i=0; i<arr.length; i++){
    if (arr[i].age>=18) {
        returnarr[i];
    }
    
}
return null;

}
console.log(arr.find((person) => person.age >= 18));

console.log();
const ageOneYear = (arr)=> {
    const agedArr = []
    arr.foreach(element => {
        
        agedArr.push(element) 
        return{
        name: element.name,
        age: element.age
    }
    });
    return agedArr;
}

//console.log(ageOneYear(arr));
//use map to store results in a new array
console.log(arr.map((person) =>{
    person.age + 1;
    return {
        name: person.age,
        age: person.age +1 
    };
}));

//get everyone who is of age
console.log();
console.log(arr.filter((person) => person.age >=18));

//sum the ages of everyone
console.log(arr.reduce(
    (accumulator, person) => {
        return accumulator + person.age;
    },0
));

console.log(arr.reduce(
    (acc, person) => {
        return acc + person.name.charAt(0);
    },""
))






//notes



//will use map(), filter() and reduce() more often than others

//filter() crewates and returns a new array with all elements that verify a condition (arr.filter)

//find() returns the first element in the array that verify the condition (if nothign showsup return undefined) findlast() finds last element

//conditional functions....you can use anything for a CONdition, must return true or false dont want it to change anything. no side effects

//map method creates a new array with return value ofa functiomn executed for each element o fthe calling array
//this function increments the age of each human
/* 
console.log(arr.map(function(element){
    element.age+=1
    return element

}))
*/

//reduce methiod reduces an array to single value by executing a provided function for each value of the array
//for each element, the return value is stored in an accumulator that can be used in all the iterations        reduce(acc,elememnt,index,current array)=>
//reducer function can take two other parameters, current index and source array
/*
function reducer (accumulator)

*/


