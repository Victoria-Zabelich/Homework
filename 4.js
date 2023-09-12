const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an array of numbers separated by commas: ", function(arr) {
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseFloat(arr[i]);
    }
    return sum;
  }
  console.log("Sum of the array: " + sumArray(arr.split(",")));
  rl.close();
});