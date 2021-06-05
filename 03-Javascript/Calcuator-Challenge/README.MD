CALCULATOR CHALLENGE

Given the task of creating a calculator based on methods already learnt.

I opted for a clean, simple styling.

FUNCTIONALITY

BREAKING DOWN THE PROBLEM

1. When user clicks a number or operand, need to display these values and store them for future use
2. The above needs to be limitless
3. When the user clicks "=", it needs to be able to calculate the sum it has been given
4. When user clicks "AC the calculator needs to reset.

IN PRACTISE

I started by storing all numbers into separate variables, before realising it would be more efficient to store them in an array.
Then used a for loop to loop through and add an event listener to all number buttons.
This event needs to trigger a function which:
displays the numbers entered to the user
adds the number to an array (storage for later)
Same process for operands

Now I had my display showing the entered sum, but I needed to break it down so it could be calculated.

The operand was easiest, I filtered the array of entered buttons and returned the operand clicked by the user. Storing this in a new array, then converted to a string for later use.

Then the numbers... after much Googling (and sould searching about my life choices...) I found I could "split" the array to remove the operand.

To keep it easy I first wanted to just see if I could get it to combine the first number with the operand and a 2nd number. I think I've managed to do this but it contains commas and isn't working on a final sum.

Plan for sum is to do an if statement to detemerine which character the finalOperand is equal to and apply the
relevant operand to the ewuation
