import React from "react";
import "./searchBox.style.css";

const SearchBox = props => (
  <div className="search-box">
    <input
      type="search"
      className="search"
      placeholder="search Monster"
      onChange={e => props.searchFunction(e.target.value)}
      value={props.searchField}
    />
  </div>
);

export default SearchBox;
