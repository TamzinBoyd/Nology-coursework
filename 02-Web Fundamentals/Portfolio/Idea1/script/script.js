// want to change the classes to light mode which is
// activted when the toggle is clicked on

// step 1 - add light mode toggle classed to all relevant sections
// create click function
// to change class of the elements

const toggle = document.querySelector(".toggle");

const background = document.querySelector(".body");
const heading = document.querySelector(".intro__heading");
const intro = document.querySelector(".intro__about");

const projectsNav = document.querySelector(".nav__projects");
const experienceNav = document.querySelector(".nav__experience");
const contactNav = document.querySelector(".nav__contact");

toggle.addEventListener("click", lightMode);

function lightMode(event) {
  background.classList.add("bodyLight");
  heading.classList.add("headingLight");
  intro.classList.add("introLight");
  projectsNav.classList.add("projectsLight");

  experienceNav.classList.add("experienceLight");
  contactNav.classList.add("contactLight");
  //  experience.classList.add("headingLight");
  //   heading.classList.add("headingLight");
}

toggle.addEventListener("click", darkMode);

function darkMode(event) {
  background.classList.remove("bodyLight");
}
