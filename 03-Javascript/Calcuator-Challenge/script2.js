// store values entered in input boxes
// const box1 = document.getElementsByClassName("box1").innerHtml;
// console.log(box1);
// const operator = document.querySelectorAll(".operand");
// for (let i = 0; i < operator.length; i++) {
//   operator[i].addEventListener("click", storeValue);
// }

// function storeValue(event) {
//   const num1 = event.target.value;
//   console.log(num1);
// }

// user types in numbers - value stays there in input box
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");


// user selects the desired operand, needs to remember this on click
// click event to carry out function that stores value as a variable
const operands = document.querySelectorAll(".operand");
const total = "";

// for loop to add event listeners to all operand buttons
for (let i = 0; i <operands.length; i++) {
operands[i].addEventListener("click", calculate);}

// takes opperand variable then stores it's value
function storeValue(operandAdd) {
if (operands.value === "+") {
    console.log("test");
}

// clicks clicks calculate and the calculator carries out the sum based on value, consider if statement
