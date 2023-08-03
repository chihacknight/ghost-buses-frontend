import { useResults } from  "../components/Context.js"
import { useRidership } from "../components/Context.js"
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import findPercentileIndex from "../utils/percentileKeys";
import Search from "../components/Search";

import RidershipGraphic from "../components/stat-visuals/RidershipGraphic";
import GhostingGraphic from "../components/stat-visuals/GhostingGraphic";
import ReliabilityRankGraphic from "../components/stat-visuals/ReliabilityRankGraphic";
import PercentileGraphic from "../components/stat-visuals/PercentileGraphic";




//copy-pasted from modal component; need to refactor
const calcBusFraction = (acc) => {
  let fraction
  if (acc > 22 && acc < 27) {
    fraction = [3, 4]
  } else if (acc > 72 && acc < 77) {
    fraction = [1, 4]
  } else {
    fraction = reduce((100 - round10(Math.round(acc))), 100);
  }

  return fraction
}

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
  const { resultsData } = useResults();
  const { ridershipData } = useRidership();


  

  // Search functions (need to be refactored)
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const searchResults = resultsData.features
    .filter((route) => {
      return (
        String(route.properties.route_id) +
        route.properties.route_long_name.toLowerCase()
      ).includes(searchTerm);
    })
    .filter((route) => {
      return !route.properties.direction.includes("South");
    })
    .filter((route) => {
      return !route.properties.direction.includes("West");
    })
    .filter((route) => {
      return route.properties.day_type === "wk";
    });;

  const searchResultsElements = searchResults.map((result) => (
    <div
      key={result.properties.route_id}
      className="search-result"
      onClick={() => navigate('/route-stats/' + result.properties.route_id, { replace: true })}
    >
      <p>
        <span>{result.properties.route_id}</span>
        {result.properties.route_long_name}
      </p>
    </div>
  ));

  // End of search code



  let { route } = useParams();



  let selectedRoute = resultsData.features.filter(
    (data) => String(data.properties.route_id) === route
  )
  const totalAcc = (selectedRoute[0].properties.ratio) * 100;
  const busFraction = calcBusFraction(totalAcc.toFixed(0))

  const selectedRouteRidership = ridershipData.filter(
    (x) => x.route_id === selectedRoute[0].properties.route_id
  );

  const averageRidershipPerWeekday = selectedRouteRidership.find(
    (x) => x.day_type === "weekday"
  );

  const percentileIndex = findPercentileIndex(selectedRoute[0]);

  return (
    <div className="page-container">
      <div className="route-title">
        <h1>
          <span className="bus-number">
            {selectedRoute[0].properties.route_id}
          </span>{" "}
        </h1>
        <h2>
          {selectedRoute[0].properties.route_long_name}
        </h2>
        <Search
          onChangeSearch={onChangeSearch}
          searchTerm={searchTerm}
          searchResultsElements={searchResultsElements}
        />
      </div>

      <div className="stats-list">

        {/* TO DO: Add static map zoomed in on route. Grab route map off CTA website? */}

        <RidershipGraphic
          ridershipCount={averageRidershipPerWeekday.avg_riders}
          intervalName="weekday" />

        <PercentileGraphic percentileIndex={percentileIndex} />

        <GhostingGraphic busFraction={busFraction} />

        <ReliabilityRankGraphic rank={selectedRoute[0].properties.ratio_ranking} />

      </div>

      <p className="footnote">
        * = weekday ridership taken from{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.transitchicago.com/assets/1/6/Monthly_Ridership_2022-7(Final).pdf"
        >
          CTA Ridership Report
        </a>{" "}
      </p>

    </div >
  );
};

export default RouteStats;
