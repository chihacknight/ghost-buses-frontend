import React from "react";
import BusRouteDetails from "./BusRouteDetails";

const Modal = ({ selectedRoute, closeModal }) => {
  const weekdayAcc =
    (parseInt(selectedRoute[0].weekday_acc) +
      parseInt(selectedRoute[1].weekday_acc)) /
    2;
  const weekendAcc =
    (parseInt(selectedRoute[0].weekend_acc) +
      parseInt(selectedRoute[1].weekend_acc)) /
    2;
  const totalAcc = parseInt(weekdayAcc + weekendAcc) / 2;
  const acceptableStandard = 80;
  const totalBuses =
    parseInt(selectedRoute[0].scheduled_buses) +
    parseInt(selectedRoute[1].scheduled_buses);

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
          weekendAcc={weekendAcc}
          acceptableStandard={acceptableStandard}
          totalBuses={totalBuses}
        />
      </div>
    </div>
  );
};

export default Modal;
