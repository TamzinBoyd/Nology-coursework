How does hangman work?

A random word is chosen by the game and hidden to user
On each turn user guesses a letter. If the letter if in the word, it's revealed
If not points are deducted (items removed from hangman)

User wins when the guess the word / all letters
User loses when all points deducted / man is hung.

IDEAS
Array of words
Each turn a random item from the array is generated (using math.random and [for index])
User enters letter in input box, clicks button to submit.
Comp checks if the letter is in the string of the chosen word - filter / if statement?
Need to show letters used - visible array

Letter is revealed on the game
OR
points deducted
