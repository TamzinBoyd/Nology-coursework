// create films
const filmsArr = ["snow shite", "black beauty", "tertinator", "step brothers"];
// get elements
const getLetter = document.querySelector(".input");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
const hiddenWord = document.querySelector("#hiddenWord");
const start = document.querySelector(".start");
const lettersContainer = document.querySelector(".letters-container");
const alphabet = document.querySelector(".usedLetters");
const hangmanContainer = document.querySelector(".hangman");
const hangman = document.querySelectorAll(".line");
const gameOverMessage = document.querySelector(".game-over");
const restartGame = document.querySelector(".reset");

let chosenWord;
let chosenWordArr = [];
let alphabetArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let value;
let score = 10;
let booleon;

alphabet.innerHTML = alphabetArr.join(" ");

// START GAME /////////////////////////////////////////////////////////////////////
// choose a random element from array (word)
// add _ to an array for each letter in the chosen word
const startGame = () => {
  chosenWord = filmsArr[Math.floor(Math.random() * filmsArr.length)];
  for (let i = 0; i < chosenWord.length; i++) {
    chosenWordArr.push("_");
  }
  checkLetter();

  button.classList.remove("hide");
  alphabet.classList.remove("hide");
  getLetter.classList.remove("hide");
  lettersContainer.classList.remove("hide");
  hangmanContainer.classList.remove("hide");
};

// ENTER A LETTER /////////////////////////////////////////////////////////////////
// get the letter user has entered from input box

const checkScore = () => {
  if (score === 0) {
    gameOver();
  } else if (!chosenWordArr.includes("_")) {
    alert("you've won the game");
  }
};
//   loop over the chosen word, if the letter is in the word then reveal it to user
// (currently represented by _ and replace with the correct letter)
const checkLetter = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === value) {
      chosenWordArr[i] = value;
    } else {
    }
  }
  // if the array doesn't include the chosen letter then score ecreases by 1 and hangman is drawn
  if (!chosenWordArr.includes(value)) {
    score -= 1;
  }
  hiddenWord.innerHTML = chosenWordArr.join(" ");
};
const gamePlay = () => {
  value = getLetter.value.toLowerCase();
  checkLetter();
  updateAlphabet();
  updateScore();
  checkScore();
};
const updateScore = () => {
  if (score === 9) {
    hangman[0].classList.remove("hide");
  } else if (score === 8) {
    hangman[1].classList.remove("hide");
  } else if (score === 7) {
    hangman[2].classList.remove("hide");
  } else if (score === 6) {
    hangman[3].classList.remove("hide");
  } else if (score === 5) {
    hangman[4].classList.remove("hide");
  } else if (score === 4) {
    hangman[5].classList.remove("hide");
  } else if (score === 3) {
    hangman[6].classList.remove("hide");
  } else if (score === 2) {
    hangman[7].classList.remove("hide");
  } else if (score === 1) {
    hangman[8].classList.remove("hide");
  } else if (score === 0) {
    hangman[9].classList.remove("hide");
  }
};

// remove the value from the alphabet, showing remaining letters to try
const updateAlphabet = () => {
  const index = alphabetArr.indexOf(value);
  if (index > -1) {
    alphabetArr.splice(index, 1);
  }
  alphabet.innerHTML = alphabetArr.join(" ");
};

const gameOver = () => {
  gameOverMessage.classList.remove("hide");
  restartGame.classList.remove("hide");
};

start.addEventListener("click", startGame);
button.addEventListener("click", gamePlay);

// it's only updating the first letter in a sequence - managed to fix but need to find a away to update score, at the minute
// it takes a point off if you get it right or not
