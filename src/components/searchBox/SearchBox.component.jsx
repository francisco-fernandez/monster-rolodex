import React from "react";
import "./searchBox.style.css";

const SearchBox = props => (
  <input
    type="search"
    className="search-box"
    placeholder="search Monster"
    onChange={e => props.searchFunction(e.target.value)}
    value={props.searchField}
  />
);

export default SearchBox;
