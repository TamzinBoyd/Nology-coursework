// user enters numbers into input boxes
// store box values as variables
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

// user selects the desired operand
// store the display & total as variables so they can be accessed outside of the function
let display = document.querySelector(".display");
let total = "";

// when users clicks on add /////////////////////////////////////////////////////////////
// stores it as a variable then adds event listener
const add = document.querySelector(".add");
add.addEventListener("click", addTotal);

// check values in input boxes and add them together, show total in display
function addTotal(add) {
  // below accounts for the third box possibly being empty
  if (box1.value & box2.value & box3.value) {
    total =
      parseFloat(box1.value) + parseFloat(box2.value) + parseFloat(box3.value);
    display.innerHTML = total;
  } else {
    total = parseFloat(box1.value) + parseFloat(box2.value);
    display.innerHTML = total;
  }
}

// when users clicks on minus /////////////////////////////////////////////////////////////
const minus = document.querySelector(".minus");
minus.addEventListener("click", minusTotal);

function minusTotal(minus) {
  if (box1.value & box2.value & box3.value) {
    total =
      parseFloat(box1.value) - parseFloat(box2.value) - parseFloat(box3.value);
    display.innerHTML = total;
  } else {
    total = parseFloat(box1.value) - parseFloat(box2.value);
    display.innerHTML = total;
  }
}

// when users clicks on divide /////////////////////////////////////////////////////////////
const divide = document.querySelector(".divide");
divide.addEventListener("click", divideTotal);

function divideTotal(divide) {
  if (box1.value & box2.value & box3.value) {
    total =
      parseFloat(box1.value) / parseFloat(box2.value) / parseFloat(box3.value);
    display.innerHTML = total;
  } else {
    total = parseFloat(box1.value) / parseFloat(box2.value);
    display.innerHTML = total;
  }
}

// when users clicks on minus /////////////////////////////////////////////////////////////
const multiply = document.querySelector(".multiply");
multiply.addEventListener("click", multiplyTotal);

function multiplyTotal(multiply) {
  if (box1.value & box2.value & box3.value) {
    total =
      parseFloat(box1.value) * parseFloat(box2.value) * parseFloat(box3.value);
    display.innerHTML = total;
  } else {
    total = parseFloat(box1.value) * parseFloat(box2.value);
    display.innerHTML = total;
  }
}

// // reset button to change input value
const reset = document.querySelector(".reset");
reset.addEventListener("click", resetCalculator);

function resetCalculator(reset) {
  box1.value = "";
  box2.value = "";
  box3.value = "";
  display.innerHTML = 0;
}
