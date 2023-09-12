const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a value in kilometers: ", function(km) {
  function convertKmToMiles(km) {
    const miles = km * 0.621371;
    return miles;
  }
  console.log("Converted value in miles: " + convertKmToMiles(km));
  rl.close();
});