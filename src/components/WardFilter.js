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
        <div className="filter-key">
          <h4>Map Key by Percentile</h4>
          <ul>
            <li>
              <span className="percentile-text">0-19%</span>
              <span className="color-key one"></span>
            </li>
            <li>
              <span className="percentile-text">20-39%</span>
              <span className="color-key two"></span>
            </li>
            <li>
              <span className="percentile-text">40-59%</span>
              <span className="color-key three"></span>
            </li>
            <li>
              <span className="percentile-text">60-79%</span>
              <span className="color-key four"></span>
            </li>
            <li>
              <span className="percentile-text">80-99%</span>
              <span className="color-key five"></span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Filter;
