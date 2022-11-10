import React from "react";
import busIcon from "../assets/bus-icon.png";
import ghostIcon from "../assets/bxs_ghost.png";

import ridershipData from "../Routes/july2022_cta_ridership_data_day_type_summary.json";

function BusRouteDetails({ selectedRoute, busFraction, percentileKeys }) {
  const selectedRouteRidership = ridershipData.filter(
    (x) => x.route_id === selectedRoute[0].properties.route_id
  );

  const averageRidershipPerWeekday = selectedRouteRidership.find(
    (x) => x.day_type === "weekday"
  );

  //percentile
  const percentileIndex = Number(
    (selectedRoute[0].properties.percentiles * 100).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })[0]
  );

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
                This bus line is in the{" "}
                <span>{`${percentileIndex}0th percentile`}</span> in terms of
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
                This bus is running over <span className="blue">95%</span> of its scheduled trips
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
              This bus ranks <span>{selectedRoute[0].properties.ranking}</span>{" "}
              in reliability
            </p>
            <p>
              out of <span>127</span> Chicago Bus lines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusRouteDetails;
