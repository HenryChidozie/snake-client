/* eslint-disable func-style */

//program that prints out two numbers: number of cows and number of chickens on a farm.
//number should be printed before cow and chickens on a farm
//The number should be padded with zero before them so that they are always 3-digit long {eg.: 007 cow, 011 chicken}
//our code should have 2 arguments: number of cow and number of chickens


function printFarmInventory(cows, chickens) {
  //create an argument to compute number of cows with padded zero
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);


  //create an argument to compute number of chicken with padded zero
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

//call the function and pass the values
printFarmInventory(8, 10);

//say we have to update the list with a new inventory item: pig
//we can create another function to update the list

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}
function printFarmInventory (cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory(20, 30, 40);

//printZeroPaddedWithLabel seems an awkward name, lets make our code even more simpler

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory (cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(10, 15, 20);
