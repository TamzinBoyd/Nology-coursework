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

// need to add function to snake items so when found it adds the class 'visible'

// Setting timer ///////////////////////////////////////

// adding click event to start button, to carry out function
document.querySelector(".start").addEventListener("click", function () {
  // setting timeleft to total time
  var timeleft = 20;

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
      document.querySelector(".timer").innerHTML =
        "Time's up! Did you find them all?";
    }
    // setting 1000 milliseoncds (1 second) for the countdown
  }, 1000);
});
