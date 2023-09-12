const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an array of numbers separated by commas: ", function(arr) {
  function filterNegativeNumbers(arr) {
    return arr.filter(function(num){return num >= 0});
  }
  console.log("Filtered array: " + filterNegativeNumbers(arr.split(",")));
  rl.close();
});