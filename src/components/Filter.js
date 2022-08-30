import React from "react";
import filterImg from "../assets/bi_filter.png";

const Filter = ({
  currentFilters,
  setCurrentFilters,
  filterOpen,
  setFilterOpen,
}) => {
  return (
    <div>
      <div className="filter-container">
        {filterOpen && (
          <div className="option-container">
            {" "}
            <>
              {" "}
              <label>
                <input
                  type="checkbox"
                  checked={currentFilters.geography.westside}
                  onChange={() =>
                    setCurrentFilters((prevfilters) => {
                      return {
                        ...prevfilters,
                        geography: {
                          ...prevfilters.geography,
                          westside: !prevfilters.geography.westside,
                        },
                      };
                    })
                  }
                />
                West Side
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={currentFilters.geography.southside}
                  onChange={() =>
                    setCurrentFilters((prevfilters) => {
                      return {
                        ...prevfilters,
                        geography: {
                          ...prevfilters.geography,
                          southside: !prevfilters.geography.southside,
                        },
                      };
                    })
                  }
                />
                South Side
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={currentFilters.geography.northside}
                  onChange={() =>
                    setCurrentFilters((prevfilters) => {
                      return {
                        ...prevfilters,
                        geography: {
                          ...prevfilters.geography,
                          northside: !prevfilters.geography.northside,
                        },
                      };
                    })
                  }
                />
                North Side
              </label>
            </>
          </div>
        )}
        <button
          onClick={() => setFilterOpen((prevFilterOpen) => !prevFilterOpen)}
        >
          <img src={filterImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
