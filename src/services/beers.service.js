export const getBeers = (searchterm) => {
  return fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((respJason) => console.log(respJason))
    .catch((error) => console.error(error));
};
