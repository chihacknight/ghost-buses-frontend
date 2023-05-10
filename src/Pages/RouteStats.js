import resultsData from "../Routes/data.json";
import ridershipData from "../Routes/july2022_cta_ridership_data_day_type_summary.json";

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import findPercentileIndex from "../utils/percentileKeys";
import Search from "../components/Search";
import MapTile from "../components/MapTile";

import RidershipGraphic from "../components/stat-visuals/RidershipGraphic";
import { percentileStatistic } from "../components/stat-visuals/PercentileGraphic";
import TripRatioGraph from "../components/stat-visuals/TripRatioGraph";
import { RidershipFootnote } from "../components/RidershipFootnote";

//customized; goes off route id
function findDataForRoute(route) {
  const results = resultsData.features.filter(
    (data) => String(data.properties.route_id) === route
  );
  return results;
}

//copy-pasted from modal component; need to refactor
const calcBusFraction = (acc) => {
  let fraction;
  if (acc > 22 && acc < 27) {
    fraction = [3, 4];
  } else if (acc > 72 && acc < 77) {
    fraction = [1, 4];
  } else {
    fraction = reduce(100 - round10(Math.round(acc)), 100);
  }

  return fraction;
};

function round10(x) {
  let digits = x.toString().split("");
  if (digits[1] >= 5) {
    digits = [Number(digits[0]) + 1, 0];
  } else {
    digits[1] = 0;
  }
  digits = digits.map((x) => Number(x));
  return parseInt(digits.join(""));
}

function reduce(numerator, denominator) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}

const RouteStats = () => {
  // Search functions (need to be refactored)
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // End of search code

  let { route } = useParams();

  let selectedRoute = findDataForRoute(route);
  const totalAcc = selectedRoute[0].properties.ratio * 100;
  const busFraction = calcBusFraction(totalAcc.toFixed(0));

  const selectedRouteRidership = ridershipData.filter(
    (x) => x.route_id === selectedRoute[0].properties.route_id
  );

  const averageRidershipPerWeekday = selectedRouteRidership.find(
    (x) => x.day_type === "weekday"
  );

  const percentileIndex = findPercentileIndex(selectedRoute[0]);

  return (
    <div className="page-container route-stat-page">
      <h1>Data by Route</h1>
      <Search
        fullWidth
        onChangeSearch={onChangeSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSelect={(route) =>
          navigate("/route-stats/" + route, { replace: true })
        }
      />

      <h2 className="routeName">
        <span className="bus-number">
          {selectedRoute[0].properties.route_id}
        </span>{" "}
        {selectedRoute[0].properties.route_long_name}
      </h2>
      <div className="route-stats-container">
        <div className="route-fast-facts">
          <h3>Fast Facts</h3>
          <ul>
            <li>{percentileStatistic(percentileIndex)}</li>
            <li>
              {busFraction[0]} in every {busFraction[1]} buses is ghosting CTA
              riders
            </li>
            <li>
              This bus ranks {selectedRoute[0].properties.ratio_ranking} in
              reliability out of 124 bus lines{" "}
            </li>
            <li>
              <RidershipGraphic
                noStyling
                ridershipCount={averageRidershipPerWeekday.avg_riders}
                intervalName="weekday"
              />
            </li>
          </ul>
          {RidershipFootnote}
        </div>
        <div className="route-map-tile">
          <MapTile route_id={selectedRoute[0].properties.route_id} />
        </div>
        <div className="stats-list">
          {/* TO DO: Add static map zoomed in on route. Grab route map off CTA website? */}

          <TripRatioGraph route_id={selectedRoute[0].properties.route_id} />
        </div>
      </div>
    </div>
  );
};

export default RouteStats;
