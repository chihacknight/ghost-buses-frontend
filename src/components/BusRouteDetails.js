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

  const percentileIndex = findPercentileIndex(selectedRoute[0]);

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

        <div className="grid-square bus-graphic">
          <GhostingGraphic busFraction={busFraction} />
        </div>

        <div className="grid-square fraction">
          <ReliabilityRankGraphic rank={selectedRoute[0].properties.ratio_ranking} />
        </div>

      </div>
    </div>
  );
}

export default BusRouteDetails;
