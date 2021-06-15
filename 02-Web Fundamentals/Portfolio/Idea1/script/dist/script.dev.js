"use strict";

// want to change the classes to light mode which is
// activted when the toggle is clicked on
// step 1 - add light mode toggle classed to all relevant sections
// create click function
// to change class of the elements
var body = document.querySelector(".body");
var toggle = document.querySelector(".toggle");
var heading = document.querySelector(".intro__heading");
var subHeading = document.querySelector(".intro__about");
var buttons = document.querySelectorAll(".button");
var divideHeading = document.querySelectorAll(".division");
var images = document.querySelector(".images");
var line = document.querySelectorAll(".line");
toggle.addEventListener("click", lightMode);

function lightMode() {
  body.classList.add("light");
  heading.classList.add("light");
  subHeading.classList.add("light");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("light");
  }

  for (var _i = 0; _i < divideHeading.length; _i++) {
    divideHeading[_i].classList.add("light");
  }

  for (var _i2 = 0; _i2 < line.length; _i2++) {
    line[_i2].classList.add("light");
  }

  images.classList.add("light");
}