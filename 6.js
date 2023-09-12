const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an array of numbers separated by commas: ", function(arr) {
  function sortArray(arr) {
    return arr.sort((a, b) => a-b);
  }
  console.log("Sorted array: " + sortArray(arr.split(",")));
  rl.close();
});