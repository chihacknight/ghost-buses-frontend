import React from "react";

function RidershipGraphic({ridershipCount, intervalName}) {
    return (
        <div className="bus-graphic-text">
            <p>This bus line services</p>
            <p className="ridership-number">
                {Math.round(ridershipCount).toLocaleString(
                    "en-us"
                )}
            </p>
            <p>Chicagoans per {intervalName}*</p>
        </div>
    );
}

export default RidershipGraphic;