// what do I want to happen
// When user clicks on a number or operand it saves it & displays it
// above needs to be limitless
// When user clicks = the calculator needs to carry out the sum and display total
// When user clicks AC display should reset back to 0

//   Declare variables ////////////////////////////////////////////////////////////////////////////////
//   empty array to push the values into
const currentArray = [];

//   display of sum and total saved in variables
const display = document.getElementById("total");
const equals = document.getElementById("equals");

//   taking active operand from user's entry & saving in variable
let finalOperand = "";

// selects all number buttons & saves in variable ////////////////////////////////////////////////////////////////////////////
const buttons = document.querySelectorAll(".number");

// loops through them all and adds an event listener that runs showNumber function when each button is clicked
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", showNumber);
}

// adds the button's value to the display box on click
function showNumber(event) {
  currentArray.push(event.target.value);
  display.innerHTML = currentArray.join("");
}

// Same as above for operands /////////////////////////////////////////////////////////////////////////
const operands = document.querySelectorAll(".operand");
for (var i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", showOperand);
}

function showOperand(event) {
  //   adding operand selected to the array in display
  currentArray.push(event.target.value);
  display.innerHTML = currentArray.join("");

  // Selecting just the operand ///////////////////////////////////////////////////////////////////////

  // want to filter the currentArray to find any operands, and store in new array
  finalOperand = currentArray.filter((currentArray) => {
    // This returns the operand clicked by the user
    return currentArray === event.target.value;
  });
  //   turns it into a string?
  finalOperand = finalOperand.toString();
  console.log(finalOperand);
}

// EQUALS BUTTON to action the equation ///////////////////////////////////////////////
// add click event
equals.addEventListener("click", calculateTotal);

//   create sum as variable for use later
let sum = 0;
let firstNumber = "";

//   function to split the array into strings of numbers then puts them in a new array //////////////////////
//   Couldn't perform this before as it wouldn't take the final entered value

function calculateTotal(event) {
  //   turns array into a string so it can be split
  let numberArray = currentArray.toString();

  // split the array when you find finalOperand (the one user entered), leaving just numbers
  numberArray = numberArray.split(finalOperand);
  console.log(numberArray);

  //   trying to loop over the original array and if the current place isn't equal to finalOperand then log current array - doesn't work
  currentArray.forEach((currentArray) => {
    if (currentArray[i] != finalOperand) {
      console.log(currentArray);
    }
  });

  // //   need to extract number when it finds the decimal and saves them seprately in an array
  // const [firstNum, secondNum] = numberArray.split("+");
  // console.log(firstNum, secondNum);

  // taking the first value **will need to fix to not just be first number later on
  // let firstNumber = numberArray[0];
  // console.log(firstNumber);
  // // above logs it with a comma, can't get join() method to work to remove this

  // // as above
  // let lastNumber = numberArray[1];
  // console.log(lastNumber);

  // trying to add it all together! Doesn't work as above numbers still show commas
  // once done need to apply for other operands
  // if (finalOperand === "+") {
  //   sum = firstNumber + lastNumber;
  //   console.log(sum);
  //   display.innterHTML = sum;
  // }
}

// Add function to clear *needs fixing //////////////////////////////////////////////////////////////////
document.querySelector(".clear").addEventListener("click", clear);
function clear(event) {
  document.getElementById("total").innerHTML = "0";
}
