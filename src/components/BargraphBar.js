import React from "react";

const BargraphBar = ({ datapoint, fullWidth, acceptableStandard, label }) => {
  const bargraphWidth = (acc) => {
    if (fullWidth) {
      return { width: "100%" };
    } else return { width: acc + "%" };
  };

  const lowAcc = () => {
    if (!fullWidth && datapoint < acceptableStandard) {
      return "low-acc";
    } else return;
  };

  return (
    <div className="bargraph-point">
      <p className="bargraph-outer-label">{label} </p>{" "}
      <div
        style={bargraphWidth(datapoint)}
        className={`bargraph-bar ${!fullWidth && "results"} ${lowAcc()}`}
      >
        <p className="bargraph-inner-label">
          {fullWidth ? datapoint + " scheduled buses" : datapoint + "%"}
        </p>
      </div>
    </div>
  );
};

export default BargraphBar;
