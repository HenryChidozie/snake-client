const reverse = function(str) {
  let temp = '';

  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }

  return temp;
};

const args = process.argv;

for (let j = 0; j < args.length - 2; j++) {
  console.log(reverse(args[j + 2]));
}