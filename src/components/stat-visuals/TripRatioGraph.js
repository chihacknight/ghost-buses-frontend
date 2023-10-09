import { React, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

import tripData from "../../Routes/schedule_vs_realtime_all_day_types_routes_2022-05-20_to_2023-07-02.json";

function rollingAverage(values, windowSize) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
        let sum = 0;
        let count = 0;
        for (let j = Math.max(0, i - windowSize + 1); j <= i; j++) {
            sum += values[j];
            count++;
        }
        result.push(sum / count);
    }
    return result;
}

function isWeekday(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5;
}
// This has been commented out because it is not used in the current version of the app. But I do not know if it will 
// be needed in the future, so I am leaving it here for now.
// function isWeekend(dateString) {
//     return !isWeekday(dateString);
// }

function isSaturday(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const dayOfWeek = date.getDay();
    return dayOfWeek === 6;
}

function isSunday(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0;
}



function TripRatioGraph({ route_id }) {

    var routeTripData_all = tripData.filter(datapoint => datapoint.route_id === route_id);
    var routeTripData_weekday = routeTripData_all.filter(datapoint => isWeekday(datapoint.date));
    var routeTripData_saturday = routeTripData_all.filter(datapoint => isSaturday(datapoint.date));
    var routeTripData_sunday = routeTripData_all.filter(datapoint => isSunday(datapoint.date));
    var timestamps;
    var tripsActual;
    var tripsScheduled;
    var ratio;
    var ratio_2wkAvg;



    const [routeTripData, setRouteTripData] = useState(routeTripData_all);
    const [dataSelection, setDataSelection] = useState("Weekdays");
    updateData();

    useEffect(() => {
        routeTripData_all = tripData.filter(datapoint => datapoint.route_id === route_id);
        routeTripData_weekday = routeTripData_all.filter(datapoint => isWeekday(datapoint.date));
        routeTripData_saturday = routeTripData_all.filter(datapoint => isSaturday(datapoint.date));
        routeTripData_sunday = routeTripData_all.filter(datapoint => isSunday(datapoint.date));
        onClickWeekdayData();
    }, [route_id])

    function updateData() {
        timestamps = routeTripData.map(datapoint => datapoint.date);
        tripsActual = routeTripData.map(datapoint => datapoint.trip_count_rt);
        tripsScheduled = routeTripData.map(datapoint => datapoint.trip_count_sched);
        ratio = routeTripData.map(datapoint => datapoint.ratio);
        ratio_2wkAvg = rollingAverage(ratio, 14);
    };

    function onClickAllData() {
        setRouteTripData(routeTripData_all);
        updateData();
        setDataSelection("All");
    }

    function onClickWeekdayData() {
        setRouteTripData(routeTripData_weekday);
        updateData();
        setDataSelection("Weekdays");
    }

    function onClickSaturdayData() {
        setRouteTripData(routeTripData_saturday);
        updateData();
        setDataSelection("Saturdays");
    }

    function onClickSundayData() {
        setRouteTripData(routeTripData_sunday);
        updateData();
        setDataSelection("Sundays");
    }



    const data_trips = [
        {
            mode: "lines",
            name: "Actual Trips",
            x: timestamps,
            xaxis: "x",
            y: tripsActual,
            yaxis: "y",
            type: "scatter"
        },
        {
            mode: "lines",
            name: "Scheduled Trips",
            x: timestamps,
            xaxis: "x",
            y: tripsScheduled,
            yaxis: "y",
            type: "scatter"
        },
    ];

    const data_ratio = [
        {
            mode: "lines",
            name: "Ratio",
            x: timestamps,
            xaxis: "x",
            y: ratio,
            yaxis: "y",
            type: "scatter",
            visible: 'legendonly',
            showLegend: true,
        },
        {
            mode: "lines",
            name: "2 Week Rolling Avg.",
            x: timestamps,
            xaxis: "x",
            y: ratio_2wkAvg,
            yaxis: "y",
            type: "scatter",
        },
    ];

    const layout_trips = {
        responsive: true,
        showLegend: false,
        autosize: true,
        title: 'Actual vs. Scheduled Trips',
        legend: {
            xanchor: 'right',
            x: 1,
            y: 1.15
        },
        yaxis: {
            title: "Trips"
        },
        
        annotations: [
            {
                x: "2022-11-01",
                y: 20,
                xref: "x",
                yref: "y",
                showarrow: false,
                text: "CTA announced schedule change<br>January 8, 2023",
            }
        ],
        shapes: [
            {
                line: { color: "black", dash: "dot", width: 0.8 },
                type: "line",
                x0: "2023-01-08",
                x1: "2023-01-08",
                xref: "x",
                y0: 0,
                y1: 1,
                yref: "y domain",
            }
        ]
    };

    const layout_ratio = {
        responsive: true,
        autosize: true,
        showlegend: true,
        legend: {
            xanchor: 'right',
            x: 1,
            y: 1.15
        },
        title: 'Schedule Attainment',
        yaxis: {
            title: 'Ratio of Actual vs. Scheduled Trips',
            range: [0.0, 1.2],
            zeroline: false
        },
        annotations: [
            {
                x: "2022-11-01",
                y: 0.3,
                xref: "x",
                yref: "y",
                showarrow: false,
                text: "CTA announced schedule change<br>January 8, 2023",
            }
        ],
        shapes: [
            {
                line: { color: "black", dash: "dot", width: 0.8 },
                type: "line",
                x0: "2023-01-08",
                x1: "2023-01-08",
                xref: "x",
                y0: 0,
                y1: 1,
                yref: "y domain",
            }
        ]
    };

    return (
        <div className="trip-performance-graph">


            <button onClick={onClickWeekdayData}
                className={dataSelection === "Weekdays" ? "data-select-button-selected" : "data-select-button"}>
                Weekdays
            </button>
            <button onClick={onClickSaturdayData}
                className={dataSelection === "Saturdays" ? "data-select-button-selected" : "data-select-button"}>
                Saturdays
            </button>
            <button onClick={onClickSundayData}
                className={dataSelection === "Sundays" ? "data-select-button-selected" : "data-select-button"}>
                Sundays
            </button>
            <button onClick={onClickAllData}
                className={dataSelection === "All" ? "data-select-button-selected" : "data-select-button"}>
                All data
            </button>

            <Plot
                data={data_ratio}
                layout={layout_ratio}
                config={{ displayModeBar: false }}
                useResizeHandler={true}
            />

            <Plot
                data={data_trips}
                layout={layout_trips}
                config={{ displayModeBar: false }}
                useResizeHandler={true}
            />
        </div>
    );
}

export default TripRatioGraph;