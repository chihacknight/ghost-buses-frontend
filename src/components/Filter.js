import React from "react";

const Filter = ({
  currentFilters,
  setCurrentFilters,
  filterOpen,
  setFilterOpen,
}) => {
  return (
    <div className="filter-container">
      {filterOpen && (
        <div className="option-container">
          {" "}
          <>
            {" "}
            <label>
              <input
                type="checkbox"
                checked={currentFilters.reliability.top10}
                onChange={() =>
                  setCurrentFilters((prevfilters) => {
                    return {
                      ...prevfilters,
                      reliability: {
                        ...prevfilters.reliability,
                        top10: !prevfilters.reliability.top10,
                      },
                    };
                  })
                }
              />
              Top 10 Buses
            </label>
            <label>
              <input
                type="checkbox"
                checked={currentFilters.reliability.bottom10}
                onChange={() =>
                  setCurrentFilters((prevfilters) => {
                    return {
                      ...prevfilters,
                      reliability: {
                        ...prevfilters.reliability,
                        bottom10: !prevfilters.reliability.bottom10,
                      },
                    };
                  })
                }
              />
              Bottom 10 buses
            </label>
          </>
        </div>
      )}
      <button
        onClick={() => setFilterOpen((prevFilterOpen) => !prevFilterOpen)}
      >
        <i class="fa-sharp fa-solid fa-filter-list"></i>
      </button>
    </div>
  );
};

export default Filter;
