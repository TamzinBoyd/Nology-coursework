CALCULATOR CHALLENGE

Given the task of creating a calculator based on methods already learnt.

FUNCTIONALITY

BREAKING DOWN THE PROBLEM

1. User types in their numbers (decided to opt for maximum of 3)
2. User clicks on the operator they want to apply to the numbers
3. The answer is displayed
4. When user clicks "Reset" the calculator needs to reset.

SIMPLE OPTION

I decided to create a calculator where the user types in their numbers, selects the operator and the calculator displays the answer, rather than the number button method.

BELOW IS HOW I STARTED MY JOURNEY

I started by storing all numbers into separate variables, before realising it would be more efficient to store them in an array.
Then used a for loop to loop through and add an event listener to all number buttons.
This event needs to trigger a function which:
displays the numbers entered to the user
adds the number to an array (storage for later)

Now I had my display showing the entered sum, but I needed to break it down so it could be calculated.

The operand was easiest, I filtered the array of entered buttons and returned the operand clicked by the user. Storing this in a new array, then converted to a string for later use.

Then the numbers... after much Googling (and sould searching about my life choices...) I found I could "split" the array to remove the operand.

To keep it easy I first wanted to just see if I could get it to combine the first number with the operand and a 2nd number. I think I've managed to do this but it contains commas and isn't working on a final sum.

Plan for sum is to do an if statement to detemerine which character the finalOperand is equal to and apply the
relevant operand to the equation

\*\* Not yet managed to create an equation to apply to the numbers and operator, needs more work
