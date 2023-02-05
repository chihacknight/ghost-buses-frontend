import React from "react";
import RankingLegend from "./RankingLegend";

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
              <h4>Map Settings</h4>
              <label>
                <input
                  type="checkbox"
                  checked={currentFilters.wards.wardsShowing}
                  onChange={() =>
                    setCurrentFilters((prevfilters) => {
                      return {
                        ...prevfilters,
                        wards: {
                          ...prevfilters.wards,
                          wardsShowing: !prevfilters.wards.wardsShowing,
                        },
                      };
                    })
                  }
                />
                Wards
              </label>
            </>
          </div>
        )}
        <button
          onClick={() => setFilterOpen((prevFilterOpen) => !prevFilterOpen)}
          aria-label="Open map filtering options"
        >
          <i aria-hidden="true" class="fa-solid fa-filter"></i>
        </button>
      </div>
      {currentFilters.color && (
        <RankingLegend/>
      )}
    </>
  );
};

export default Filter;
