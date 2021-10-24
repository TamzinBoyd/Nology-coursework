How does hangman work?

A random word is chosen by player 1 (computer)
On each turn the user guesses a letter. If the letter is in the word, it's revealed
If not points are deducted and hangman starts to appear

User wins when they guess all letters of the word
User loses when all points deducted / hangman appears fully

HOW TO APPROACH
Array of words
Each game a random item from the array is generated (using math.random)
User enters letter in an input box and clicks a button to submit.
Computer checks if the letter is in the string of the chosen word.
If so the letter replaces a space in the hidden word /
if not, part of the hangman appears (using classlist)

Main challenge seemed to be finding a way to show the user which letters they had already chosen.
Started exploring an array, which had values pushed into it.
Then decided to display an alphabet and remove the letters from the alphabet array each go

START GAME

- word is chosen
- alphabet shown
- score set to 10

GET & CHECK A VALUE

- enter value in input box & store
- convert all to lowercase
- check if value is in the chosen word with loop, if so update chosen word to show the value
- if not score needs to decrease by 1 & classlist removed from hangman element
- Alphabet to update minus the value

WIN THE GAME

- If chosen word doesn't include any "\_"
- Notify the user that they have won in HTML

GAME OVER

- when score reachs 0, game over is activated
- show a reset button to: reset score to 10, choose another word, reset alphabet array

IDEAS TO ADD
Difficulty levels - could determine what level the score starts at
