import React from "react";
import RankingLegend from "./RankingLegend";

const Filter = ({
  currentFilters,
  setCurrentFilters,
  filterOpen,
  setFilterOpen,
  wardFilter,
}) => {
  return (
    <>
      <div className="filter-container">
        {filterOpen && (
          <div className="option-container">
            {" "}
            <>
              {" "}
              {!wardFilter && (
                <>
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
                </>
              )}
              <h4>Map Settings</h4>
              {!wardFilter && (
                <label>
                  <input
                    type="checkbox"
                    checked={currentFilters.busLines}
                    onChange={() =>
                      setCurrentFilters((prevfilters) => {
                        return {
                          ...prevfilters,
                          busLines: !prevfilters.busLines,
                        };
                      })
                    }
                  />
                  Show Bus Routes
                </label>
              )}
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
      {currentFilters.color && <RankingLegend />}
    </>
  );
};

export default Filter;
