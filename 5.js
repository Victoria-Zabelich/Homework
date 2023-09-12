const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an array of numbers separated by commas: ", function(arr) {
  function reverseArray(arr) {
    return arr.reverse();
  }
  console.log("Reversed array: " + reverseArray(arr.split(",")));
  rl.close();
});