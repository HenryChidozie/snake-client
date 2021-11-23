const sum = function(one, two) {
  return one + two;
};
const args = process.argv.slice(2);
console.log(sum(Number(args[0]), Number(args[1])));

    