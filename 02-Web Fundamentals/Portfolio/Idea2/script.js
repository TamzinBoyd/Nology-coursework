const body = document.querySelector("body");
const hi = document.querySelector(".welcome__hi");
const welcome = document.querySelector(".welcome__info");
const toggle = document.querySelector(".mode-toggle");
const subheading = document.querySelectorAll(".subHeading");
const projects = document.querySelector(".projects__container");
const experience = document.querySelector(".experience-container");
const icons = document.querySelectorAll(".skill-icon");
const contact = document.querySelector(".contact");
const contactPara = document.querySelectorAll(".contact__para");
const contactBold = document.querySelector(".contact__intouch");
const navBar = document.querySelector(".nav-container");

toggle.addEventListener("click", () => {
  body.classList.add("dark");
  hi.classList.add("dark");
  welcome.classList.add("dark");
  for (let i = 0; i < subheading.length; i++) {
    subheading[i].classList.add("dark");
  }
  projects.classList.add("dark");
  experience.classList.add("dark");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("dark");
  }
  contact.classList.add("dark");
  for (let i = 0; i < contactPara.length; i++) {
    contactPara[i].classList.add("dark");
  }
  contactBold.classList.add("dark");
  navBar.classList.add("dark");
});
