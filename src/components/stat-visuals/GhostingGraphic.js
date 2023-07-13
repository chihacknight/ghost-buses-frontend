import React from "react";
import busIcon from "../../assets/bus-icon.png";
import ghostIcon from "../../assets/bxs_ghost.png";

function GhostingGraphic({ busFraction }) {
    return (
            busFraction[0] !== 0 ? (
                <div>
                    <div className="bus-graphic-text">
                        <p>
                            <span>{busFraction[0]}</span> in every{" "}
                            <span>{busFraction[1]}</span> weekday buses
                        </p>
                        <p>
                            is <span className="ghost">ghosting</span> CTA riders
                        </p>
                    </div>
                    <div className="bus-ghost-container">
                        {[...Array(busFraction[1] - busFraction[0])].map((x) => (
                            <img src={busIcon} alt="representation of CTA bus" />
                        ))}

                        {[...Array(busFraction[0])].map((x) => (
                            <img src={ghostIcon} alt="representation of CTA bus" />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="bus-graphic-text">
                        <p>
                            This bus is running over <span className="blue">95%</span> of
                            its scheduled trips
                        </p>
                    </div>
                    <div className="bus-ghost-container">
                        <img src={busIcon} alt="representation of CTA bus" />
                    </div>
                </div>
            )
    );
}

export default GhostingGraphic;