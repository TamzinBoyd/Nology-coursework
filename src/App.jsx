import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getBeers } from "./services/beers.service";
import CardList from "./components/CardList/CardList";

import SearchBar from "./components/SearchBar";

const App = () => {
  // state later set to API list so beers = api array
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filterByName = `?beer_name=${searchTerm}`;

  const getBeers = (filterByName) => {
    return fetch(`https://api.punkapi.com/v2/beers${filterByName}`)
      .then((response) => response.json())
      .then((respJason) => {
        return respJason;
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const filterBeers = `https://api.punkapi.com/v2/beers${filterByName}`;
  }, [filterByName]);

  // pass value of input box into api list & update state to results
  const updateBeerList = async (filterByName) => {
    const beerList = await getBeers(filterByName);
    setBeers(beerList);
  };

  useEffect(() => {
    updateBeerList();
  }, []);

  return (
    <div className="App">
      <NavBar beers={beers} />
      <SearchBar
        beers={beers}
        placeholder={"Search our extensive range of beers"}
        setSearchTerm={setSearchTerm}
      />
      <CardList beers={beers} />
    </div>
  );
};

export default App;
