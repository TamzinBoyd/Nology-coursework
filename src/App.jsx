import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getBeers } from "./services/beers.service";

const App = () => {
  const [beers, setBeers] = useState([]);

  const updateBeerList = async (searchTerm) => {
    // get API and pass in value of the search box
    const beerList = await getBeers(searchTerm);
    // change state so beers is equal to api list
    setBeers(beerList);
  };

  return (
    <div className="App">
      <NavBar updateSearchText={updateBeerList} />
    </div>
  );
};

export default App;
