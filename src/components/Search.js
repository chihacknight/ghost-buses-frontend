import React from "react";
import resultsData from "../Routes/data.json";

const Search = ({
  onChangeSearch,
  searchTerm,
  setSearchTerm,
  onSelect,
  fullWidth,
}) => {
  const searchResults = resultsData.features
    .filter((route) => {
      return (
        String(route.properties.route_id) +
        route.properties.route_long_name.toLowerCase()
      ).includes(searchTerm);
    })
    .filter((route) => {
      return !route.properties.direction.includes("South");
    })
    .filter((route) => {
      return !route.properties.direction.includes("West");
    })
    .filter((route) => {
      return route.properties.day_type === "wk";
    });

  const SearchItem = ({ id, description, onSelect }) => {
    const handleClick = () => {
      onSelect(id);
      setSearchTerm("");
    };

    return (
      <div className="search-result" onClick={handleClick}>
        <p>
          <span>{id}</span>
          {description}
        </p>
      </div>
    );
  };
  const searchResultsElements = searchResults.map((result) => (
    <SearchItem
      key={result.properties.route_id}
      id={result.properties.route_id}
      description={result.properties.route_long_name}
      onSelect={onSelect}
      setSearchTerm={setSearchTerm}
    />
  ));

  return (
    <div
      className="search-container"
      style={{ width: fullWidth ? "100%" : "" }}
    >
      <input
        type="text"
        placeholder="Search for a bus route"
        onChange={onChangeSearch}
        className={searchTerm ? "open" : "close"}
      />
      {searchTerm && (
        <div
          className="results-container"
          style={{
            width: fullWidth ? "90%" : "",
            border: fullWidth ? "1px solid #eee" : "",
            borderTop: "none",
          }}
        >
          {searchResultsElements}
        </div>
      )}
    </div>
  );
};

export default Search;
