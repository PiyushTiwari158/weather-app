import React from "react";

const SearchBar = ({ location, handleInput, handleKeyDown, onSearch })=> (
     
  <div className="search-bar">
    <input
      type="text"
      placeholder="Enter Location"
      value={location}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
    />
    <i className="fa-solid fa-magnifying-glass" onClick={onSearch}></i>
  </div>
);

SearchBar.defaultProps = {
  location: "",
  handleInput: () => {},
  handleKeyDown: () => {},
  onSearch: () => {},
};

export default SearchBar;
