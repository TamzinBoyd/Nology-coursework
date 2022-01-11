import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  const { updateSearchText } = props;

  const input = (
    <input type="text" onInput={(e) => updateSearchText(e.target.value)} />
  );

  return (
    <div>
      <h3>Search for your favourite beer</h3>
      {input}
    </div>
  );
};

export default SearchBar;
