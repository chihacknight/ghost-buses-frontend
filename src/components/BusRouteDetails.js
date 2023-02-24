import React from "react";

import ridershipData from "../Routes/july2022_cta_ridership_data_day_type_summary.json";

import findPercentileIndex from "../utils/percentileKeys";
import RidershipGraphic from "./stat-visuals/RidershipGraphic";
import PercentileGraphic from "./stat-visuals/PercentileGraphic";
import GhostingGraphic from "./stat-visuals/GhostingGraphic";
import ReliabilityRankGraphic from "./stat-visuals/ReliabilityRankGraphic";

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
  const percentileIndex = findPercentileIndex(
    selectedRoute[0].properties.percentiles * 100
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
          <RidershipGraphic
            ridershipCount={averageRidershipPerWeekday.avg_riders}
            intervalName="weekday" />
        </div>

        <div className="grid-square percentile">
          <PercentileGraphic percentileIndex={percentileIndex} />
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
          <ReliabilityRankGraphic rank={selectedRoute[0].properties.ratio_ranking} />
        </div>

      </div>
    </div>
  );
}

export default BusRouteDetails;
