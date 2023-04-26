import React from "react";

function RidershipGraphic({ ridershipCount, intervalName, noStyling }) {
  return (
    <div className={noStyling ? "" : "bus-graphic-text ridership"}>
      <span>This bus line services</span>{" "}
      <span className="ridership-number">
        {Math.round(ridershipCount).toLocaleString("en-us")}
      </span>{" "}
      <span>Chicagoans per {intervalName}*</span>
    </div>
  );
}

export default RidershipGraphic;
