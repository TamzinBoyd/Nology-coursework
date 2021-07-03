const snakesToShow = document.querySelectorAll(".snake_toShow");
const checkboxes = document.querySelectorAll("input");
const snakesToFind = document.querySelectorAll(".snake_toFind");

const container = document.querySelector(".main-container");
let timer = document.querySelector(".timer");
let downloadTimer = "";

// adding event listeners to all checkboxes
for (let index = 0; index < checkboxes.length; index++) {
  const clickBox = checkboxes[index];
  clickBox.addEventListener("click", (event) => {
    checkboxes[index].classList.add("hide");
    // each checkbox related to specific snake, so it ensures the right one is hidden
    //  by checking the last part of the current class list
    if (event.target.classList[0].split("_")[1] === "one") {
      hideSnake(snakesToFind[0], snakesToShow[0]);
    } else if (event.target.classList[0].split("_")[1] === "two") {
      hideSnake(snakesToFind[1], snakesToShow[1]);
    } else if (event.target.classList[0].split("_")[1] === "three") {
      hideSnake(snakesToFind[2], snakesToShow[2]);
    } else if (event.target.classList[0].split("_")[1] === "four") {
      hideSnake(snakesToFind[3], snakesToShow[3]);
    } else if (event.target.classList[0].split("_")[1] === "five") {
      hideSnake(snakesToFind[4], snakesToShow[4]);
    } else if (event.target.classList[0].split("_")[1] === "six") {
      hideSnake(snakesToFind[5], snakesToShow[5]);
    }
  });
}

// passing into it the snake location, so it hides the correct snake / checkbox
function hideSnake(snakesToFind, snakesToShow) {
  snakesToFind.classList.add("hide");
  snakesToShow.classList.add("visible");
  alert("Well done, you found a snake");
}

// Setting the reset button ///////////////////////////////////////

// Setting the timer ///////////////////////////////////////

document.querySelector(".start").addEventListener("click", function () {
  container.classList.add("visible");

  // setting timeleft to total time for the game  to run (in seconds)
  let timeleft = 120;
  let downloadTimer = setInterval(function startTime() {
    // changing timer text to timeleft, calculating minutes then remainder into seconds
    const minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    seconds = seconds.toString();

    if (seconds.length === 2) {
      document.querySelector(".timer").innerHTML = `${minutes}:${seconds}`;
    } else if (seconds.length === 1) {
      document.querySelector(".timer").innerHTML = `${minutes}:0${seconds}`;
    }

    // saying time left is to take away 1 each millisecond
    timeleft -= 1;
    // if 0 then it stops and shows a message
    if (timeleft === 0) {
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

  document.querySelector(".reset").addEventListener("click", () => {
    for (let i = 0; i < snakesToShow.length; i++) {
      snakesToShow[i].classList.remove("visible");
    }

    for (let i = 0; i < snakesToFind.length; i++) {
      snakesToFind[i].classList.remove("hide");
    }

    clearInterval(downloadTimer);
  });
});
