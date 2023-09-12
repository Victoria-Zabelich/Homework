const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string with spaces: ", function(str) {
  function removeSpaces(str) {
    return str.replace(/\s/g, '');
  }
  console.log("String without spaces: " + removeSpaces(str));
  rl.close();
});