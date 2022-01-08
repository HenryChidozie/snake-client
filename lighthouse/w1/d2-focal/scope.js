//DECLARING GLOBAL AND LOCAL FUNCTIONS

let myGlobalVar = 'global';

const printMyVars = function() {
  let myLocalVar = 'local';
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
};
printMyVars();

console.log("-- Outside of printMyVars now --");
//console.log(myLocalVar);


//DECLARING LOCAL FUNCTIONS INSIDE GLOBAL FUNCTIONS
let myVar = "global";

const myFunction = function() {
  let myVar = "local";

  console.log("Inside myFunction, myVar is:", myVar);
};

myFunction();
console.log("Outside myFunction, myVar is:", myVar);


//PASSING DATA TO GLOBAL FUNCTIONS
const person = 'Martha';

const sayHelloBadly = function() {
  console.log(`Howdy, ${person}`);
};
sayHelloBadly(); //WORKS BUT NOT IDEAL

const sayHelloGoodly = function(name) {
  console.log(`Howdy, ${name}`);
};
sayHelloGoodly(person); //THIS IS A BETTER WAY TO PARSE DATA