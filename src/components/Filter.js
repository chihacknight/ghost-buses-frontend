import React from "react";

const Filter = ({
  currentFilters,
  setCurrentFilters,
  filterOpen,
  setFilterOpen,
}) => {
  return (
    <>
      <div className="filter-container">
        {filterOpen && (
          <div className="option-container">
            {" "}
            <>
              {" "}
              <h4>Reliability</h4>
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
              <h4>Map Settings</h4>
              <label>
                <input
                  type="checkbox"
                  checked={currentFilters.color}
                  onChange={() =>
                    setCurrentFilters((prevfilters) => {
                      return {
                        ...prevfilters,
                        color: !prevfilters.color,
                      };
                    })
                  }
                />
                Color Filtering
              </label>
            </>
          </div>
        )}
        <button
          onClick={() => setFilterOpen((prevFilterOpen) => !prevFilterOpen)}
          aria-label="Open map filtering options"
        >
          <i aria-hidden="true" className="fa-solid fa-filter"></i>
        </button>
      </div>
      {currentFilters.color && (
        <div className="filter-key">
          <h4>Reliability Ranking</h4>
          <ul>
            <li>
              <span className="percentile-text">Top 20%</span>
              <span className="color-key five"></span>
            </li>
            <li>
              <span className="percentile-text"></span>
              <span className="color-key four"></span>
            </li>
            <li>
              <span className="percentile-text">Middle 20%</span>
              <span className="color-key three"></span>
            </li>
            <li>
              <span className="percentile-text"></span>
              <span className="color-key two"></span>
            </li>
            <li>
              <span className="percentile-text">Bottom 20%</span>
              <span className="color-key one"></span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Filter;
