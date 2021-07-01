const snakesToShow = document.querySelectorAll(".snake_toShow");
const checkboxes = document.querySelectorAll("input");
const snakesToFind = document.querySelectorAll(".snake_toFind");

const container = document.querySelector(".main-container");
let timer = document.querySelector(".timer");

// adding event listeners to all checkboxes
for (let index = 0; index < checkboxes.length; index++) {
  const clickBox = checkboxes[index];
  clickBox.addEventListener("click", (event) => {
    checkboxes[index].classList.add("hide");
    // each checkbox related to specific snake, so it ensures the right one is hidden
    //  by checking the last part of the current class list
    if (event.target.classList[0].split("_")[1] === "one") {
      hideSnakeOne();
    } else if (event.target.classList[0].split("_")[1] === "two") {
      hideSnakeTwo();
    } else if (event.target.classList[0].split("_")[1] === "three") {
      hideSnakeThree();
    } else if (event.target.classList[0].split("_")[1] === "four") {
      hideSnakeFour();
    } else if (event.target.classList[0].split("_")[1] === "five") {
      hideSnakeFive();
    } else if (event.target.classList[0].split("_")[1] === "six") {
      hideSnakeSix();
    }
  });
}

// functions for each found snake
function hideSnakeOne() {
  document.querySelector(".object1").classList.add("hide");
  snakesToShow[0].classList.add("visible");
  alert("Well done, you found a snake");
}

function hideSnakeTwo() {
  document.querySelector(".object2").classList.add("hide");
  snakesToShow[1].classList.add("visible");
  alert("Well done, you found a snake");
}

function hideSnakeThree() {
  document.querySelector(".object3").classList.add("hide");
  snakesToShow[2].classList.add("visible");
  alert("Well done, you found a snake");
}

function hideSnakeFour() {
  document.querySelector(".object4").classList.add("hide");
  snakesToShow[3].classList.add("visible");
  alert("Well done, you found a snake");
}
function hideSnakeFive() {
  document.querySelector(".object5").classList.add("hide");
  snakesToShow[4].classList.add("visible");
  alert("Well done, you found a snake");
}

function hideSnakeSix() {
  document.querySelector(".object6").classList.add("hide");
  snakesToShow[5].classList.add("visible");
  alert("Well done, you found a snake");
}

// Setting the timer ///////////////////////////////////////

document.querySelector(".start").addEventListener("click", function () {
  container.classList.add("visible");

  // setting timeleft to total time for the game  to run (in seconds)
  let timeleft = 120;
  let downloadTimer = setInterval(function function1() {
    // changing timer text to timeleft, calculating minutes then remainder into seconds
    const minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;

    document.querySelector(".timer").innerHTML = `${minutes}:${seconds}`;

    // saying time left is to take away 1 each millisecond
    timeleft -= 1;
    // if 0 then it stops and shows a message
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      timer.innerHTML = "Time's up! Did you find them all?";
      alert("Time's up");
      // if all snakes have been found
    } else if (
      snakesToShow[0].classList.contains("visible") &&
      snakesToShow[1].classList.contains("visible") &&
      snakesToShow[2].classList.contains("visible") &&
      snakesToShow[3].classList.contains("visible") &&
      snakesToShow[4].classList.contains("visible") &&
      snakesToShow[5].classList.contains("visible")
    ) {
      // stop the timer and show an alert
      clearInterval(downloadTimer);
      timer.innerHTML = "Well done, you won the game";
      container.classList.add("hide");
    }

    // setting 1000 milliseoncds (1 second) for the countdown
  }, 1000);
});
