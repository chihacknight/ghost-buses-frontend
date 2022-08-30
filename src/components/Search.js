import React from "react";

const Search = ({ onChangeSearch, searchTerm, searchResultsElements }) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="search" onChange={onChangeSearch}></input>
      {searchTerm && (
        <div className="results-container">{searchResultsElements}</div>
      )}
    </div>
  );
};

export default Search;
