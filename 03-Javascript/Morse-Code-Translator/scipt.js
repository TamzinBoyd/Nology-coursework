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

const morseAlphabet = [
  {
    " ": "",
    "-": " ",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
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
    " ": " ",
  },
];

// translate English to Morse code //////////////////////////////////
document
  .querySelector(".entry-box-english")
  .addEventListener("input", function () {
    // get value from 1st input box
    let getEnglishInput = document.querySelector(".entry-box-english").value;
    getEnglishInput = getEnglishInput.toString().toLowerCase();

    let getMorseBox = document.querySelector(".entry-box-morse");

    const convertToMorse = (englishInput) => {
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

    getMorseBox.value = convertToMorse(getEnglishInput);
  });

// translate Morse code to English
// will need to know the character by separating with space or -
document
  .querySelector(".entry-box-morse")
  .addEventListener("input", function () {
    let getMorseInput = document.querySelector(".entry-box-morse").value;
    // getEnglishInput = getEnglishInput.toLowercase();
    getMorseInput = getMorseInput.split(" ");
    const test = morseAlphabet.find((item) => {
      return item.getMorseInput === ".-";
    });
    console.log(test);
  });

let getEnglishBox = document.querySelector(".entry-box-english");

// want to take each "character" from Morse Code input (e.g. .-)
// check it against the morseAlphabet object
// return the value that matches the key
// const getMorseCharacters = () => {
//   getMorseInput.map((morseCharacter) => {
//     console.log(morseCharacter);
//   });
// };
// getEnglishBox.value = getMorseCharacters(morseAlphabet);
