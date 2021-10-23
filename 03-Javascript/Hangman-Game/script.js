// create films
const filmsArr = ["snow white", "black beauty", "terminator", "step brothers"];
// get elements
const getLetter = document.querySelector(".input");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
const hiddenWord = document.querySelector("#hiddenWord");
const start = document.querySelector(".start");
const usedLetters = document.querySelector(".usedLetters");
const errorMessage = document.querySelector(".error");
const scoreTotal = document.querySelector(".score");

let chosenWord;
let chosenWordArr = [];
let value;
let usedLettersArr = [];
let score = 5;

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
  checkPreviousLetters();
  //   array to show user already chosen letters
  checkScore();
};

//   check if the letter has already been used
const checkPreviousLetters = () => {
  for (let i = 0; i < usedLettersArr.length; i++) {
    if (value === usedLettersArr[i]) {
      errorMessage.innerHTML = `You've already tried the letter ${value}, please try another letter`;
      gamePlay();
    } else {
      // addToUsedLetters();
    }
  }
};

//   loop over the chosen word, if the current letter is the same as what the user entered then loop over the array (currently represented by _ and replace with the correct letter)
const checkLetter = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === value) {
      chosenWordArr[i] = value;
      score--;
    }
  }
  hiddenWord.innerHTML = chosenWordArr.join(" ");
};

const checkScore = () => {
  if (score <= 0) {
    gameOver();
  } else {
    checkLetter();
  }
};
const gameOver = () => {
  alert("game over");
};
start.addEventListener("click", chooseWord);
button.addEventListener("click", gamePlay);

// show hangman animation
