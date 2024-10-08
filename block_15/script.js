//Parses intake string into an array of strings
//Loops through the array of strings and assigns keys to an object
//if there isnt a key already and increases the value of that key
//if the key already exists
function parseFroyoInput(input) {
  parsedInput = input.split(",");
  let flavorCount = {};

  for (let i = 0; i < parsedInput.length; i++) {
    if (flavorCount[parsedInput[i]] == undefined) {
      flavorCount[parsedInput[i]] = 1;
    } else {
      flavorCount[parsedInput[i]]++;
    }
  }
  return flavorCount;
}


//Start of code
//prompts user for input then generates a table based on input in console
let froyoInput = prompt(
  "Enter a list of comma-separated froyo flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.table(parseFroyoInput(froyoInput));
