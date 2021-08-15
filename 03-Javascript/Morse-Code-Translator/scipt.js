//  CHALLENGE
// Create a morse code translator using OOP.
//
// it should be able to translate based on user input from the DOM.
// Consider how you will store the morse characters in JS to make translation easier.
//
// The classes you use should store all the information needed to translate between Morse and
// English, including the alphabets themselves, the word to translate and possibly the eventual output as it’s changing.
//
// Some of the methods might include how to add a word to translate, how to break it down to aid
// the translation and you’ll have to think carefully about how and when you call these methods to
// make sure the state of the object is getting changed correctly.
//
// The logic for translating both ways won’t be exactly the same but some methods may be similar
// enough that you might be able to create a base class to extend from in order to share logic
// between the two translators (Morse => English, English => Morse).

// STEP ONE - RESEARCH MORSE CODE TRANSLATION
//  Each letter has a morse code equivalent, these are combined to make words. Using  . & -

// DESIGN & CONTENT
// An input box for user to enter their text
// output box (with option to also input)
// option to switch between morse code & English
// when entering morse code ask user to enter space between entries?
// design mobile first

// FUNCTONALITY
// User enters text & returns translation in input box
// 1. User enters value. Save it from the DOM into an array
// 2. Split array into individual characters (as strings, in array)
// 3. Function to loop over / map array and check each letter
// 4. Return the translated "letter" in morse code
// 5. Display results to user

// Really struggling to know how to pass an array into a class so it can be used in a function,
// also knowing how to loop over it within a class, if possible

const testArray = ["a", "b", "c"];
const mapArray = "";

class TranslateToEnglish {
  constructor(value) {
    this.value = value;
  }

  //   getTranslation(arr) {
  //     if (this.value === "a") {
  //       return "-";
  //     } else if (this.value === "b") {
  //       return "-...";
  //     }
  //   }

  mapArray = (letter) => {
    for (let i = 0; i < testArray.length; i++) {
      // console.log(testArray[i]);
      if (this.value === "a") {
        return "-";
      } else if (this.value === "b") {
        return "-...";
      }
    }
  };
}

console.log(TranslateToEnglish.mapArray(testArray));
// const testObject = new TranslateToEnglish(testArray[1]);
// console.log(testObject.getTranslation());
