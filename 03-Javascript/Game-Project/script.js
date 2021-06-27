// save the items to hide in variables

const object1 = document.querySelector(".object1");
const object2 = document.querySelector(".object2");
const object3 = document.querySelector(".object3");
const object4 = document.querySelector(".object4");
const object5 = document.querySelector(".object5");
const object6 = document.querySelector(".object6");

// save the checkboxes in variables
const checkbox1 = document.querySelector("#object1");
const checkbox2 = document.querySelector("#object2");
const checkbox3 = document.querySelector("#object3");
const checkbox4 = document.querySelector("#object4");
const checkbox5 = document.querySelector("#object5");
const checkbox6 = document.querySelector("#object6");

// save the snakes in variables
const snake1 = document.querySelector("#snake1");
const snake2 = document.querySelector("#snake2");
const snake3 = document.querySelector("#snake3");
const snake4 = document.querySelector("#snake4");
const snake5 = document.querySelector("#snake5");
const snake6 = document.querySelector("#snake6");

const container = document.querySelector(".main-container");
let timer = document.querySelector(".timer");

// Setting timer ///////////////////////////////////////

// adding click event to start button, to carry out function
document.querySelector(".start").addEventListener("click", function () {
  container.classList.add("visible");

  // setting timeleft to total time
  var timeleft = 120;

  // setting the countdown to run the function1
  var downloadTimer = setInterval(function function1() {
    // changing timer text to timeleft
    const minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;

    document.querySelector(".timer").innerHTML =
      // timeleft + " " + "seconds remaining";
      `${minutes}:${seconds}`;

    // saying time left is to minus 1 each millisecond
    timeleft -= 1;
    // if 0 then it stops and shows a message
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      timer.innerHTML = "Time's up! Did you find them all?";
      alert("Time's up");
      // if all snakes have been found then timer shows a message
    } else if (
      snake1.classList.contains("visible") &&
      snake2.classList.contains("visible") &&
      snake3.classList.contains("visible") &&
      snake4.classList.contains("visible") &&
      snake5.classList.contains("visible") &&
      snake6.classList.contains("visible")
    ) {
      clearInterval(downloadTimer);
      timer.innerHTML = "Well done, you won the game";
    }

    // setting 1000 milliseoncds (1 second) for the countdown
  }, 1000);
});

// Function to hide (remove) the found object, show an alert, then hide the checkbox
function snakeOne() {
  snake1.classList.add("visible");
  addClass1();
}

function snakeTwo() {
  snake2.classList.add("visible");
  addClass2();
}

function snakeThree() {
  snake3.classList.add("visible");
  addClass3();
}
function snakeFour() {
  snake4.classList.add("visible");
  addClass4();
}
function snakeFive() {
  snake5.classList.add("visible");
  addClass5();
}
function snakeSix() {
  snake6.classList.add("visible");
  addClass6();
}

// function to hide the found ojbect and checkbox
// then function to check if all snakes contain a class list then an alert will show & the game will be hidden again
function addClass1() {
  object1.classList.add("hide");
  alert("Well done, you found an object");
  checkbox1.classList.add("hide");

  if (
    snake1.classList.contains("visible") &&
    snake2.classList.contains("visible") &&
    snake3.classList.contains("visible") &&
    snake4.classList.contains("visible") &&
    snake5.classList.contains("visible") &&
    snake6.classList.contains("visible")
  ) {
    alert("Well done, you won the game!");
    container.classList.remove("visible");
  }
}

function addClass2() {
  object2.classList.add("hide");
  alert("Well done, you found an object");
  checkbox2.classList.add("hide");

  if (
    snake1.classList.contains("visible") &&
    snake2.classList.contains("visible") &&
    snake3.classList.contains("visible") &&
    snake4.classList.contains("visible") &&
    snake5.classList.contains("visible") &&
    snake6.classList.contains("visible")
  ) {
    alert("Well done, you won the game!");
    container.classList.remove("visible");
  }
}
function addClass3() {
  object3.classList.add("hide");
  alert("Well done, you found an object");
  checkbox3.classList.add("hide");
  if (
    snake1.classList.contains("visible") &&
    snake2.classList.contains("visible") &&
    snake3.classList.contains("visible") &&
    snake4.classList.contains("visible") &&
    snake5.classList.contains("visible") &&
    snake6.classList.contains("visible")
  ) {
    alert("Well done, you won the game!");
    container.classList.remove("visible");
  }
}
function addClass4() {
  object4.classList.add("hide");
  alert("Well done, you found an object");
  checkbox4.classList.add("hide");
  if (
    snake1.classList.contains("visible") &&
    snake2.classList.contains("visible") &&
    snake3.classList.contains("visible") &&
    snake4.classList.contains("visible") &&
    snake5.classList.contains("visible") &&
    snake6.classList.contains("visible")
  ) {
    alert("Well done, you won the game!");
    container.classList.remove("visible");
  }
}
function addClass5() {
  object5.classList.add("hide");
  alert("Well done, you found an object");
  checkbox5.classList.add("hide");
  if (
    snake1.classList.contains("visible") &&
    snake2.classList.contains("visible") &&
    snake3.classList.contains("visible") &&
    snake4.classList.contains("visible") &&
    snake5.classList.contains("visible") &&
    snake6.classList.contains("visible")
  ) {
    alert("Well done, you won the game!");
    container.classList.remove("visible");
  }
}
function addClass6() {
  object6.classList.add("hide");
  alert("Well done, you found an object");
  checkbox6.classList.add("hide");
  if (
    snake1.classList.contains("visible") &&
    snake2.classList.contains("visible") &&
    snake3.classList.contains("visible") &&
    snake4.classList.contains("visible") &&
    snake5.classList.contains("visible") &&
    snake6.classList.contains("visible")
  ) {
    alert("Well done, you won the game!");
    container.classList.remove("visible");
  }
}
