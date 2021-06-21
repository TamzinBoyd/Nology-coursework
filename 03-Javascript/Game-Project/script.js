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
