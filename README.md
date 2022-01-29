Create a searchable beer database using an api.
Needs to update page as you enter a letter in the search bar.

ADDITIONAL CHALLENHE
Be able to filter on:

- High Alcohol (ABV > 6%)
- Classic range (brewed before 2010)
- High acidity (ph lower than 4)

FIRST STEPS

1. Broke down into components:
   NavBar
   Search Box (need to pass in search term from input box and return matching beers)
   Filter List (need to accept value via tick box and return list of matching beers)

Main
Card List - render Card based on search/filter criteria, accept API
Card - HTML for each card

Other
Not Found
Services to hold api request

<!-- filtering -->

When entering a letter in the search box, you want to check if that letter is contained in any of the beer.names
If so render the card
beers array . filter (searchTerm {
return < Card />
})
