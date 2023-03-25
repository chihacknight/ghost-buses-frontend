import React from "react";

function ReliabilityRankGraphic({rank}) {
    return (
        <div className="bus-graphic-text">
            <p>
                This bus ranks{" "}
                <span>{rank}</span> in
                reliability
            </p>
            <p>
                out of <span>124</span> Chicago Bus lines
            </p>
        </div>
    );
}

export default ReliabilityRankGraphic;