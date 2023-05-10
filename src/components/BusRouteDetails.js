import React from "react";
import busIcon from "../assets/bus-icon.png";
import ghostIcon from "../assets/bxs_ghost.png";

import ridershipData from "../Routes/july2022_cta_ridership_data_day_type_summary.json";

import findPercentileIndex from "../utils/percentileKeys";

function BusRouteDetails({ selectedRoute, busFraction }) {
  const selectedRouteRidership = ridershipData.filter(
    (x) => x.route_id === selectedRoute[0].properties.route_id
  );

  const averageRidershipPerWeekday = selectedRouteRidership.find(
    (x) => x.day_type === "weekday"
  );

  //percentile

  // i averaged the data for these percentiles in excel. you can use this key by using the index as the first digit of the percentile block, so percentileKeys[2] will be percentiles from 20-29%
  // FIX ME : eventually we're going to want these numbers rendered dynamically when the backend/data updates

  const percentileKeys = [63, 73, 75, 77, 80, 83, 87, 90, 93, 94];
  const percentileIndex = findPercentileIndex(selectedRoute[0]);
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
    <div className="bus-route-details">
      <h3>
        <span className="bus-number">
          {selectedRoute[0].properties.route_id}
        </span>{" "}
        {selectedRoute[0].properties.route_long_name}
      </h3>
      <div className="grid">
        <div className="grid-square ridership">
          <div className="bus-graphic-text">
            <p>This bus line services</p>
            <p className="ridership-number">
              {Math.round(averageRidershipPerWeekday.avg_riders).toLocaleString(
                "en-us"
              )}
            </p>
            <p>Chicagoans per weekday*</p>
          </div>
        </div>
        <div className="grid-square percentile">
          <div className="bus-graphic-text">
            <div className="bargraph">{barGraphBars}</div>
            {percentileIndex === 9 && (
              <p>
                This bus line is in the <span>top 10%</span> in terms of
                reliability
              </p>
            )}
            {percentileIndex === 0 && (
              <p>
                This bus line is in the <span>bottom 10%</span> in terms of
                reliability
              </p>
            )}
            {percentileIndex > 0 && percentileIndex < 9 && (
              <p>
                This bus line is performing better than{" "}
                <span>{`${percentileIndex}0%`}</span> of bus lines in terms of
                reliability
              </p>
            )}
          </div>
        </div>

        {busFraction[0] !== 0 ? (
          <div className="grid-square bus-graphic">
            <div className="bus-graphic-text">
              <p>
                <span>{busFraction[0]}</span> in every{" "}
                <span>{busFraction[1]}</span> weekday buses
              </p>
              <p>
                is <span className="ghost">ghosting</span> CTA riders
              </p>
            </div>
            <div className="bus-ghost-container">
              {[...Array(busFraction[1] - busFraction[0])].map((x) => (
                <img src={busIcon} alt="representation of CTA bus" />
              ))}

              {[...Array(busFraction[0])].map((x) => (
                <img src={ghostIcon} alt="representation of CTA bus" />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid-square bus-graphic">
            <div className="bus-graphic-text">
              <p>
                This bus is running over <span className="blue">95%</span> of
                its scheduled trips
              </p>
            </div>
            <div className="bus-ghost-container">
              <img src={busIcon} alt="representation of CTA bus" />
            </div>
          </div>
        )}

        <div className="grid-square fraction">
          <div className="bus-graphic-text">
            <p>
              This bus ranks{" "}
              <span>{selectedRoute[0].properties.ratio_ranking}</span> in
              reliability
            </p>
            <p>
              out of <span>124</span> Chicago Bus lines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusRouteDetails;
