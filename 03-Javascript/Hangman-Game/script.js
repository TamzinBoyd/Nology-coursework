// create films
const filmsArr = [
  "snow white",
  "black beauty",
  "alice in wonderland",
  "marley and me",
  "frozen",
  "peter rabbit",
];
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
const wonGame = document.querySelector(".won-game");
const restartGame = document.querySelector(".reset");

let chosenWord;
let chosenWordArr = [];
let alphabetArr = [];
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
    if (chosenWord[i] === " ") {
      chosenWordArr.push("/");
    } else {
      chosenWordArr.push("_");
    }
  }
  generateAlpabet();

  button.classList.remove("hide");
  alphabet.classList.remove("hide");
  getLetter.classList.remove("hide");
  hangmanContainer.classList.remove("hide");
  restartGame.classList.remove("hide");
};

const generateAlpabet = () => {
  alphabetArr = [
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
};

// get the letter user has entered from the input box
const gamePlay = () => {
  value = getLetter.value.toLowerCase();
  if (value.length > 1) {
    alert("Only enter one letter at a time");
  } else {
    checkLetter();
    updateAlphabet();
    updateScore();
    checkScore();
  }
};

//   loop over the chosen word, if the user's letter is in the word then reveal it to user
const checkLetter = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === value) {
      chosenWordArr[i] = value;
    } else {
    }
  }
  // if the array doesn't include the chosen letter then score decreases by 1 and hangman is drawn
  if (!chosenWordArr.includes(value)) {
    score -= 1;
  }
  hiddenWord.innerHTML = chosenWordArr.join(" ");
  lettersContainer.classList.remove("hide");
};

// remove the value from the alphabet, showing remaining letters to try
const updateAlphabet = () => {
  const index = alphabetArr.indexOf(value);
  if (index > -1) {
    alphabetArr.splice(index, 1);
  }
  alphabet.innerHTML = alphabetArr.join(" ");
};

// check score to determine parts of hangman that get revealed
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
  getLetter.value = "";
};

// CHECK SCORE FOR GAME OVER or WIN ///////////////////////////////////////////////////////////////////
const checkScore = () => {
  if (score === 0) {
    gameOver();
  } else if (!chosenWordArr.includes("_")) {
    wonGame.classList.remove("hide");
  }
};

const gameOver = () => {
  gameOverMessage.classList.remove("hide");
  restartGame.classList.remove("hide");
};

const hideHangman = () => {
  hangman[0].classList.add("hide");
  hangman[1].classList.add("hide");
  hangman[2].classList.add("hide");
  hangman[3].classList.add("hide");
  hangman[4].classList.add("hide");
  hangman[5].classList.add("hide");
  hangman[6].classList.add("hide");
  hangman[7].classList.add("hide");
  hangman[8].classList.add("hide");
  hangman[9].classList.add("hide");
};

const restart = () => {
  // re-hide all elements so user can only select start game
  gameOverMessage.classList.add("hide");
  button.classList.add("hide");
  alphabet.classList.add("hide");
  getLetter.classList.add("hide");
  lettersContainer.classList.add("hide");
  hangmanContainer.classList.add("hide");
  restartGame.classList.add("hide");
  wonGame.classList.add("hide");
  // reset values
  chosenWord = "";
  chosenWordArr = [];
  score = 10;
  generateAlpabet();
  hideHangman();
  hiddenWord.innerHTML = chosenWordArr.join(" ");
  alphabet.innerHTML = alphabetArr.join(" ");
  getLetter.value = "";
};
start.addEventListener("click", startGame);
button.addEventListener("click", gamePlay);
restartGame.addEventListener("click", restart);
