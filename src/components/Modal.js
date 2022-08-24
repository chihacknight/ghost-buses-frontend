import React from "react";

export default function Modal({ selectedRoute, closeModal }) {
  const weekdayAcc =
    (parseInt(selectedRoute[0].weekday_acc) +
      parseInt(selectedRoute[1].weekday_acc)) /
    2;
  const weekendAcc =
    (parseInt(selectedRoute[0].weekend_acc) +
      parseInt(selectedRoute[1].weekend_acc)) /
    2;
  const totalAcc = parseInt(weekdayAcc + weekendAcc) / 2;


  return (
    <div className="modal">
      <div className="modal-container">
        <button onClick={closeModal} className="close-btn">x</button>
        <h3>
          {selectedRoute[0].route_id} {selectedRoute[0].route_long_name}
        </h3>
        <p>
          <span>Bus route description</span> a short writeup of the route, the
          fact that it services the {selectedRoute[0].service.length === 1 ? selectedRoute[0].service : selectedRoute[0].service[0] + " and " + selectedRoute[0].service[1] } area of Chicago.
        </p>
        <h4>
          The <span>{selectedRoute[0].route_long_name}</span> Bus at a Glance
        </h4>
        <ul>
          <li>
            On an average weekday, this route services{" "}
            <span>{selectedRoute[0].weekday_ridership}</span> Chicagoans.
          </li>
          <li>
            By our anaysis, it's only running about <span>{totalAcc}%</span> of
            its scheduled buses
          </li>
        </ul>
        <div className="bargraph">
          <div className="bargraph-point">
            <p>Scheduled Buses</p>
            <div  className="bargraph-bar">
              <p className="bargraph-inner-label">37 scheduled buses</p>
            </div>
          </div>
          <div className="bargraph-point">
            <p>% of Weekday Buses </p>{" "}
            <div className="bargraph-bar">
              <p className="bargraph-inner-label">{weekdayAcc}%</p>
            </div>
          </div>
          <div className="bargraph-point">
            <p>% of Scheduled Weekend Buses </p>
            <div width={`${weekendAcc}%`} className="bargraph-bar">
              <p className="bargraph-inner-label">{weekendAcc}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
