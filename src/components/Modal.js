import React from "react";
import BusRouteDetails from "./BusRouteDetails";

export default function Modal({ selectedRoute, closeModal }) {
  const weekdayRoutes = selectedRoute.filter(
    (route) => route.properties.day_type === "wk"
  );
  const sundayRoutes = selectedRoute.filter(
    (route) => route.properties.day_type === "sun"
  );
  const saturdayRoutes = selectedRoute.filter(
    (route) => route.properties.day_type === "sat"
  );

  const weekdayAcc =
    ((weekdayRoutes[0].properties.ratio + weekdayRoutes[1].properties.ratio) /
      2) *
    100;
  const saturdayAcc = (saturdayRoutes.length > 0)
    ? ((saturdayRoutes[0].properties.ratio +
        saturdayRoutes[1].properties.ratio) /
        2) *
      100
    : 0;
  const sundayAcc = (sundayRoutes.length > 0) ? 
    ((sundayRoutes[0].properties.ratio + sundayRoutes[1].properties.ratio) /
      2) *
    100 : 0;
  
  const totalDataPoints = (saturdayAcc > 0 ? 1 : 0) + (sundayAcc > 0 ? 1 : 0) + (weekdayAcc > 0 ? 1 : 0)
  const totalAcc = (saturdayAcc + sundayAcc + weekdayAcc) / totalDataPoints;
  const acceptableStandard = 80;

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="close-btn">
          x
        </button>
        <BusRouteDetails
          selectedRoute={selectedRoute}
          totalAcc={totalAcc}
          weekdayAcc={weekdayAcc}
          saturdayAcc={saturdayAcc}
          sundayAcc={sundayAcc}
          acceptableStandard={acceptableStandard}
        />
      </div>
    </div>
  );
}
