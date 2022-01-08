const rollDice = function(totalDice) {
  let result = [];

  for (let i = 0; i < totalDice; i++) {

    let roll = Math.floor(Math.random() * 6) + 1;
    result.push(roll);
    console.log(`Rolled: ${roll}`);
  }
  return (result.join());
};

console.log(rollDice(4));
console.log(rollDice(5));
console.log(rollDice(6));
