import React from "react";

const Search = ({ onChangeSearch, searchTerm, searchResults, onSelect }) => {

  const searchResultsElements = searchResults.map((result) => (
    <SearchItem
      key={result.properties.route_id}
      id={result.properties.route_id}
      description={result.properties.route_long_name}
      onSelect={onSelect} />
  ));

  return (
    <div className="search-container">
      <input type="text"
        placeholder="Search for a bus route"
        onChange={onChangeSearch}
        className={searchTerm ? "open" : "close"} />
      {searchTerm && (
        <div className="results-container">{searchResultsElements}</div>
      )}
    </div>
  );
};


const SearchItem = ({ id, description, onSelect }) => {

  const handleClick = () => {
    onSelect(id)
  };

  return (
    <div
      className="search-result"
      onClick={handleClick}
    >
      <p>
        <span>{id}</span>
        {description}
      </p>
    </div>
  );

};

export default Search;