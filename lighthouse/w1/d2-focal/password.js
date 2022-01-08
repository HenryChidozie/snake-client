"use strict";

const obfuscate = function(args) {
  let array = args.split('');
  let newPasswordArray = [];

  for (let value of array) {
    if (value === 'a') {
      newPasswordArray.push('4');

    } else if (value === 'e') {
      newPasswordArray.push('3');
    } else if (value === 'o') {
      newPasswordArray.push('0');
    } else if (value === 'l') {
      newPasswordArray.push('1');
    } else {
      newPasswordArray.push(value);
    }
  }

  let obfuscatePassword = newPasswordArray.join('');
  return obfuscatePassword;
};

console.log(obfuscate('password'));
console.log(obfuscate('abracadabra'));
console.log(obfuscate('audaciously'));
