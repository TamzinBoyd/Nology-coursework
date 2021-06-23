// save the items to hide in variables

const cat = document.querySelector(".object1");
const dog = document.querySelector(".object2");

// save the checkboxes in variables
const catCheckbox = document.querySelector("#cat");
const dogCheckbox = document.querySelector("#dog");

// Function to hide (remove) the found object, show an alert, then hide the checkbox
function addClass() {
  cat.classList.add("hide");
  alert("well done, you found an object");
  catCheckbox.classList.add("hide");
}

function addClassDog() {
  dog.classList.add("hide");
  alert("well done, you found an object");
  dogCheckbox.classList.add("hide");
}

// Setting timer ///////////////////////////////////////

// function to run on button click
// startBtn.addEventListener("click", countdown);

const startingMinutes = 1;
let time = startingMinutes * 60;
const timeLeftDisplay = document.querySelector("#time-left");
// const timer = document.querySelector(".timer");

// to run every second using setInterval (1000 is 1000 milliseconds = 1 sec)

document.querySelector(".start").addEventListener("click", function () {
  var timeleft = 60;

  var downloadTimer = setInterval(function function1() {
    document.querySelector(".timer").innerHTML =
      timeleft + " " + "seconds remaining";

    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.querySelector(".timer").innerHTML = "Time is up!";
    }
  }, 1000);
});

// function inititateCountdown() {
//   setInterval(updateCountdown, 1000);
// }

// // function to calculate remaining time
// function updateCountdown() {
//   // calculate minutes left, which is end time (in seconds) / 60
//   // math.floor returns lowest number with no decimals
//   const minutes = Math.floor(time / 60);
//   // seconds is what number remains after calculating minutes
//   let seconds = time % 60;

//   // if seconds are less than 10 then want to display 0 before seconds so 05 etc
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   // show above in display
//   timeLeftDisplay.innerHTML = `${minutes}:${seconds}`;
//   // countdown by 1
//   time--;
//   // if time reaches 0, then time stops
//   time = time < 0 ? 0 : time;
// }
