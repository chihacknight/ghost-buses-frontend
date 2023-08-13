import React from "react";

const RankingLegend = () => {
    return (
        <div className="filter-key">
            <h4>Map Key by Percentile</h4>
            <ul>
                <li>
                    <span className="percentile-text">0-19%</span>
                    <span className="color-key one"></span>
                </li>
                <li>
                    <span className="percentile-text">20-39%</span>
                    <span className="color-key two"></span>
                </li>
                <li>
                    <span className="percentile-text">40-59%</span>
                    <span className="color-key three"></span>
                </li>
                <li>
                    <span className="percentile-text">60-79%</span>
                    <span className="color-key four"></span>
                </li>
                <li>
                    <span className="percentile-text">80-99%</span>
                    <span className="color-key five"></span>
                </li>
            </ul>
        </div>
    );
};


export default RankingLegend;