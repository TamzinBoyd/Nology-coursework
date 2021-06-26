PROJECT BREIF

Create an interactive game using HTML, CSS & JAVASCRIPT with a mobile first approach

HOW I APPROACHED IT

Decided on a missing item game where the user finds items.

BREAKING IT DOWN

1. Image including hidden objects
2. User clicks "start game" to activate timer
3. User finds an item, it is removed from game play and an alert shows
4. Found items show on a display
5. Either a. user finds all items and wins the game, alert shows and timer stops.
   b. timer finishes before user finds all items, alert shows to stop the same

Firstly I played around with basic functions to practise layering elements. I knew that on click I would need to hide an element. In this case PNG file types met this functionality.

I decided on the same snake character. I opted for a checkbox in the same location as the hidden item and set opacity to 0.

Created a click event to the checkboxes which added a class which changed display to none, therefore hiding the element. Even if user clicked again it wouldn't reappear.

Once happy with the core functionality it was time for the design! I opted for a cartoon style image, targeted more at children. I created a variety of pet illustrations using Affinity Photo.

To show how many items were left to find I created a preview of the items at a reduced opacity, when user finds a snake the related item will add a class to make the preview item full opacity.

Not wanting to make the game too easy I added a timer. Here I learnt about the setInterval method.

The game was fully functional but there wasn't a way to tell the user they had won the game, so I added an IF statement to check if all snakes have a class list of "visible", implying all have been found, and set up an alert.
