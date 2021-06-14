// what do I want to happen
// When user clicks on a number or operand it saves it & displays it
// above needs to be limitless
// When user clicks = the calculator needs to carry out the sum and display total
// When user clicks AC display should reset back to 0

// Ways to improve for future
// currently the calcultor only accepts one operand

//   Declare variables ////////////////////////////////////////////////////////////////////////////////
//   empty array to push the values into
let currentArray = [];

//   display of sum and total saved in variables
const display = document.getElementById("total");
const equals = document.getElementById("equals");

//   variable to layer take active operand from user's entry
let finalOperand = "";

// selects all number buttons then operand buttons
const buttons = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");

// FUNCTIONS ///////////////////////////////////////////////////////////////////////////////////////////

// adds the button's value to the display box on click
function showNumber(event) {
  currentArray.push(event.target.value);
  display.innerHTML = currentArray.join("");
}

function showOperand(event) {
  // adds selected operand to the display then joins it with a space
  currentArray.push(event.target.value);
  display.innerHTML = currentArray.join("");

  // filters currentarray to take the value of the operand selected by user
  finalOperand = currentArray.filter((currentArray) => {
    // This returns the operand clicked by the user
    return currentArray === event.target.value;
  });
  //   turns it into a string for later use
  finalOperand = finalOperand.toString();
}

// equals function to carry out final sum
function calculateTotal(event) {
  //  changes array to a new variable but joins it together
  const calculateStr = currentArray.join("");
  //   creates variable for the 2 separate parts & operand
  const operandPos = calculateStr.indexOf(finalOperand);
  //   creates substring of value upto finaloperand
  const firstNum = calculateStr.substring(0, operandPos);
  //   as above but takes second value
  const secondNum = calculateStr.substring(operandPos + 1);
  //   carry out the sum depending on final operand value
  if (finalOperand === "+") {
    display.innerHTML = parseFloat(firstNum) + parseFloat(secondNum);
  } else if (finalOperand === "-") {
    display.innerHTML = parseFloat(firstNum) - parseFloat(secondNum);
  } else if (finalOperand === "x") {
    display.innerHTML = parseFloat(firstNum) * parseFloat(secondNum);
  } else if (finalOperand === "/") {
    display.innerHTML = parseFloat(firstNum) / parseFloat(secondNum);
  }
}

// when user selects clear the display returns to 0 and array is reset to empty array
function clear(event) {
  display.innerHTML = "0.00";
  calculateStr = currentArray;
  currentArray = [];
}

//  EVENT LISTENERS ////////////////////////////////////////////////////
// adds click to all buttons & carry out function which adds clicked values to the display
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", showNumber);
}

// Same as above for operands /////////////////////////////////////////////////////////////////////////

for (var i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", showOperand);
}

// Equals button to carry out end sum
equals.addEventListener("click", calculateTotal);

// AC clear button
document.querySelector(".clear").addEventListener("click", clear);
