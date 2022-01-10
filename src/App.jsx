import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getBeers } from "'./beers.service.js";

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeerList = async (searchTerm) => {
    const beerList = await getBeers(searchTerm);
    setBeers(beerList);
  };

  return (
    <div className="App">
      <NavBar />
    </div>
  );
};

export default App;
