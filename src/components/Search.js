import React from "react";

const Search = ({ onChangeSearch, searchTerm, searchResultsElements }) => {
  return (
    <div className="search-container">
      <input type="text"
        placeholder="Search for a bus route" 
        onChange={onChangeSearch} 
        className={searchTerm ? "open" : "close"}/>
      {searchTerm && (
        <div className="results-container">{searchResultsElements}</div>
      )}
    </div>
  );
};

export default Search;