// want to change the classes to light mode which is
// activted when the toggle is clicked on

// step 1 - add light mode toggle classed to all relevant sections
// create click function
// to change class of the elements

const body = document.querySelector(".body");
const toggle = document.querySelector(".toggle");
const heading = document.querySelector(".intro__heading");
const subHeading = document.querySelector(".intro__about");
const buttons = document.querySelectorAll(".button");
const divideHeading = document.querySelectorAll(".division");
const images = document.querySelector(".images");
const line = document.querySelectorAll(".line");

toggle.addEventListener("click", lightMode);

function lightMode() {
  body.classList.add("light");
  heading.classList.add("light");
  subHeading.classList.add("light");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("light");
  }
  for (let i = 0; i < divideHeading.length; i++) {
    divideHeading[i].classList.add("light");
  }
  for (let i = 0; i < line.length; i++) {
    line[i].classList.add("light");
  }
  images.classList.add("light");
}
