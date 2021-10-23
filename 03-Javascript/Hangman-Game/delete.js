// create films
const filmsArr = ["snow white", "black beauty", "terminator", "step brothers"];
// get elements
const getLetter = document.querySelector(".input");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
const hiddenWord = document.querySelector("#hiddenWord");
const start = document.querySelector(".start");
const alphabet = document.querySelector(".usedLetters");
const errorMessage = document.querySelector(".error");
const scoreTotal = document.querySelector(".score");

let chosenWord;
let chosenWordArr = [];
let value;
let alphabetArr = ["a", "b", "c", "d"];
let alphabetList = "<ul>";
let score = 5;
alphabet.innerHTML = alphabetArr;
// choose a random element from array (word)
// Change to array so can loop over it and add _ for each letter in the chosen word - returning _ _ _ etc
const chooseWord = () => {
  chosenWord = filmsArr[Math.floor(Math.random() * filmsArr.length)];
  for (let i = 0; i < chosenWord.length; i++) {
    chosenWordArr.push("_");
  }
};

// get the letter user has entered from input box
const gamePlay = () => {
  value = getLetter.value.toLowerCase();

  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === value) {
      chosenWord[i] === value;
      console.log("hi");
    } else {
      updateArr();
    }
  }
  hiddenWord.innerHTML = chosenWordArr.join(" ");
};
const updateArr = () => {
  // remove the value from the alphabet, showing remaining letters to try
  const index = alphabetArr.indexOf(value);
  if (index > -1) {
    alphabetArr.splice(index, 1);
  }
  alphabet.innerHTML = alphabetArr;
  // keep track of score
  for (let i = 0; i < 1; i++) {
    if (!chosenWord.includes(value)) {
      score -= 1;
      console.log(score);
      break;
    } else {
      return score;
    }
  }
};

const gameOver = () => {
  alert("game over");
};
start.addEventListener("click", chooseWord);
button.addEventListener("click", gamePlay);

// show hangman animation

const generateAlphabet = () => {
  // alphabetArr.forEach((letter) => {
  //   let li = document.createElement("li");
  //   let text = document.createTextNode(letter);
  //   li.appendChild(text);
  //   alphabet.appendChild(li);
  // });
};
