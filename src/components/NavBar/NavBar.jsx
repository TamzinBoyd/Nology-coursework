import React from "react";
import SearchBar from "../SearchBar";

const NavBar = (props) => {
  const { updateSearchText } = props;

  return (
    <div>
      <h1>BREWDOG</h1>
      <SearchBar updateSearchText={updateSearchText} />
    </div>
  );
};

export default NavBar;
