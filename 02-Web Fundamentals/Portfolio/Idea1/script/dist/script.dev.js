"use strict";

// want to change the classes to light mode which is
// activted when the toggle is clicked on
// step 1 - add light mode toggle classed to all relevant sections
// create click function
// to change class of the elements
var toggle = document.querySelector(".toggle");
var background = document.querySelector(".body");
var heading = document.querySelector(".intro__heading");
var intro = document.querySelector(".intro__about");
var projectsNav = document.querySelector(".nav__projects");
var experienceNav = document.querySelector(".nav__experience");
var contactNav = document.querySelector(".nav__contact");
toggle.addEventListener("click", lightMode);

function lightMode(event) {
  background.classList.add("bodyLight");
  heading.classList.add("headingLight");
  intro.classList.add("introLight");
  projectsNav.classList.add("projectsLight");
  experienceNav.classList.add("experienceLight");
  contactNav.classList.add("contactLight"); //  experience.classList.add("headingLight");
  //   heading.classList.add("headingLight");
}

toggle.addEventListener("click", darkMode);

function darkMode(event) {
  background.classList.remove("bodyLight");
}