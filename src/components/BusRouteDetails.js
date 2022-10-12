import React from "react";
import BargraphBar from "./BargraphBar";

function BusRouteDetails({
  
  selectedRoute,
  totalAcc,
  acceptableStandard,
  weekdayAcc,
  sundayAcc,
  saturdayAcc
}) {
  return (
    <div>
      <h3>
        <span className="bus-number">{selectedRoute[0].properties.route_id}</span>{" "}
        {selectedRoute[0].properties.route_long_name}
      </h3>
      <p>
        <span>Bus route description</span> a short writeup of the route
      </p>
      <h4>
        The <span>{selectedRoute[0].route_long_name}</span> Bus at a Glance
      </h4>
      <ul>
        <li>
          By our anaysis, it's running about{" "}
          <span
            className={totalAcc < acceptableStandard ? "low-acc" : "high-acc"}
          >
            {totalAcc.toFixed(2)}%
          </span>{" "}
          of its scheduled buses
        </li>
        {totalAcc >= acceptableStandard ? (
          <li className="high-acc">
            Overall, we consider service on this bus to be within an
            <span> acceptable margin</span>.
          </li>
        ) : (
          <li className="low-acc">
            We believe this falls <span>below an acceptable standard</span> for
            Chicagoans.
          </li>
        )}
      </ul>
      <h4>By the Numbers</h4>
      <div className="bargraph">
        {/* <BargraphBar
          datapoint={totalBuses}
          fullWidth={true}
          acceptableStandard={acceptableStandard}
          label="Total # of Scheduled Buses"
        /> */}
        <BargraphBar
          datapoint={totalAcc}
          fullWidth={false}
          acceptableStandard={acceptableStandard}
          label="% of Total Scheduled Buses Running"
        />
        <BargraphBar
          datapoint={weekdayAcc}
          fullWidth={false}
          acceptableStandard={acceptableStandard}
          label="% of Scheduled Weekday Buses Running"
        />
        {saturdayAcc > 0 && <BargraphBar
          datapoint={saturdayAcc}
          fullWidth={false}
          acceptableStandard={acceptableStandard}
          label="% of Scheduled Saturday Buses Running"
        />}
        {sundayAcc > 0 && <BargraphBar
          datapoint={sundayAcc}
          fullWidth={false}
          acceptableStandard={acceptableStandard}
          label="% of Scheduled Sunday Buses Running"
        />}
      </div>
      <p className="modal-footnote">
        * from CTA's May 2022{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.transitchicago.com/assets/1/6/Monthly_Ridership_2022-5(Final).pdf"
        >
          Ridership Report
        </a>
      </p>
    </div>
  );
}

export default BusRouteDetails;
