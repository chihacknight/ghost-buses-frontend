import React from "react";
import Plot from 'react-plotly.js';

import tripData from "../../Routes/schedule_vs_realtime_all_day_types_routes_2022-05-20_to_2023-03-11.json";

function TripRatioGraph({ route_id }) {

    var routeTripData = tripData.filter(datapoint => datapoint.route_id == route_id);
    var timestamps = routeTripData.map(datapoint => datapoint.date);
    var tripsActual = routeTripData.map(datapoint => datapoint.trip_count_rt);
    var tripsScheduled = routeTripData.map(datapoint => datapoint.trip_count_sched);
    var ratio = routeTripData.map(datapoint => datapoint.ratio);

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
        },
    ];

    const layout_trips = {
        responsive: true,
        autosize: true,
        title: 'Actual vs. Scheduled Trips',
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
            <Plot
                data={data_ratio}
                layout={layout_ratio}
                config={{ displayModeBar: false }}
            />
            
            <Plot
                data={data_trips}
                layout={layout_trips}
                config={{displayModeBar: false}}
            />
        </div>
    );
}

export default TripRatioGraph;