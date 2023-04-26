import React from "react";
import findPercentileIndex from "../../utils/percentileKeys";

export const percentileStatistic = (percentileIndex) => {
  if (percentileIndex === 9) {
    return (
      <p>
        This bus line is in the <span>top 10%</span> in terms of reliability
      </p>
    );
  }
  if (percentileIndex === 0) {
    return (
      <p>
        This bus line is in the <span>bottom 10%</span> in terms of reliability
      </p>
    );
  }
  return (
    <p>
      This bus line is performing better than{" "}
      <span>{`${percentileIndex}0%`}</span> of bus lines in terms of reliability
    </p>
  );
};

function PercentileGraphic({ selectedRoute }) {
  const percentileIndex = findPercentileIndex(selectedRoute);

  // i averaged the data for these percentiles in excel. you can use this key by using the index as the first digit of the percentile block, so percentileKeys[2] will be percentiles from 20-29%
  // FIX ME : eventually we're going to want these numbers rendered dynamically when the backend/data updates
  const percentileKeys = [63, 73, 75, 77, 80, 83, 87, 90, 93, 94];
  const barGraphBars = percentileKeys.map((x, index) => {
    return (
      <div
        key={x}
        className={`bargraph-bar ${
          index === percentileIndex ? "selected-bar" : ""
        }`}
        style={{ height: x }}
      ></div>
    );
  });

  return (
    <div className="bus-graphic-text">
      <div className="bargraph">{barGraphBars}</div>
      {percentileStatistic(percentileIndex)}
    </div>
  );
}

export default PercentileGraphic;
