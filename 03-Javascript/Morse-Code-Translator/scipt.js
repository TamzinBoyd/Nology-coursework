const englishAlphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  " ": "  ",
};

const morseAlphabet = {
  " ": "",
  "/": " ",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
};

// translate English to Morse code //////////////////////////////////
document.querySelector(".button-eng").addEventListener("click", function () {
  // get value from 1st input box
  let getEnglishInput = document.querySelector(".entry-box-english").value;
  getEnglishInput = getEnglishInput.toString().toLowerCase();

  let getMorseBox = document.querySelector(".entry-box-morse");

  const translateToMorse = (englishInput) => {
    return englishInput
      .split("")
      .map((character) => {
        return englishAlphabet[character]
          ? // if true return the object value at the passed in key value
            englishAlphabet[character]
          : // if false return the character entered
            character;
      })
      .join("");
  };

  getMorseBox.value = translateToMorse(getEnglishInput);
});

// translate Morse code to English

document.querySelector(".button-mor").addEventListener("click", function () {
  let getMorseInput = document.querySelector(".entry-box-morse").value;
  // separate value at " " and turn into array"
  getMorseInput = getMorseInput.split(" ");

  const translateToEnglish = (morseInput) => {
    return morseInput
      .map((character) => {
        // if the character is a key in the morseAlphabet
        if (character in morseAlphabet) {
          return morseAlphabet[character]
            ? morseAlphabet[character]
            : character;
        } else {
          return character;
        }
      })
      .join("");
  };
  getEnglishBox.value = translateToEnglish(getMorseInput);
});

let getEnglishBox = document.querySelector(".entry-box-english");
