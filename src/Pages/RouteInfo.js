import resultsData from "../Routes/data.json";

import React from "react";
import BusRouteDetails from "../components/BusRouteDetails";
import { useParams } from "react-router-dom";

//customized; goes off route id
function findDataForRoute(route) {
  const results = resultsData.features.filter(
    (data) =>
      String(data.properties.route_id) === route
  );
  return results;
}

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



const RouteInfo = () => {

  let { route } = useParams();

  let selectedRoute = findDataForRoute(route)
  const totalAcc = (selectedRoute[0].properties.ratio) * 100;
  const busFraction = calcBusFraction(totalAcc.toFixed(0))

  return (
    <div className="page-container">

      <BusRouteDetails
        selectedRoute={selectedRoute}
        totalAcc={totalAcc}
        busFraction={busFraction}
      />
    </div>
  );
};

export default RouteInfo;
