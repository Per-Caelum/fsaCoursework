// TODO: this file! :)
const form = document.querySelector("form");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");

let numberArr = [];
let evenNumberArr = [];
let oddNumberArr = [];

printAllNumbers = () => {
  const output = document.querySelector("output");
  output.innerText = numberArr;
};

printAllEvenNumbers = () => {
  const output = document.querySelector("#evens output");
  output.innerText = evenNumberArr;
};

printAllOddNumbers = () => {
  const output = document.querySelector("#odds output");
  output.innerText = oddNumberArr;
};

//Smash stuff if we need to make sure 0's don't end up in Evens
evenOrOdd = () => {
  if (numberArr.length > 0) {
    if (numberArr.at(0) % 2 == 1) {
      oddNumberArr.push(numberArr.shift());
      printAllOddNumbers();
    } else {
      evenNumberArr.push(numberArr.shift());
      printAllEvenNumbers();
    }
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  if (data.get("number") !== "") {
    numberArr.push(data.get("number"));
    printAllNumbers();
    form.reset();
  }
});

sortOne.addEventListener("click", function (event) {
  event.preventDefault();
  evenOrOdd();
  printAllNumbers();
  form.reset();
});

sortAll.addEventListener("click", function (event) {
  event.preventDefault();
  while (numberArr.length > 0) {
    evenOrOdd();
    printAllNumbers();
  }
  form.reset();
});
