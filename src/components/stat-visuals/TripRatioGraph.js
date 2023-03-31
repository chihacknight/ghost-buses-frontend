import React from "react";
import Plot from 'react-plotly.js';

import tripData from "../../Routes/schedule_vs_realtime_all_day_types_routes_2022-05-20_to_2023-03-11.json";

function TripRatioGraph({ route_id }) {

    var routeTripData = tripData.filter(datapoint => datapoint.route_id == route_id);
    var timestamps = routeTripData.map(datapoint => datapoint.date);
    var tripsActual = routeTripData.map(datapoint => datapoint.trip_count_rt);
    var tripsScheduled = routeTripData.map(datapoint => datapoint.trip_count_sched);
    var ratio = routeTripData.map(datapoint => datapoint.ratio);


    return (
        <div className="trip-performance-graph">
            <Plot
                data={[
                    {
                        mode: "lines",
                        name: "Actual Trips",
                        x: timestamps,
                        xaxis: "x",
                        y: tripsActual,
                        yaxis: "y",
                        type: "scatter",
                    },
                    {
                        mode: "lines",
                        name: "Scheduled Trips",
                        x: timestamps,
                        xaxis: "x",
                        y: tripsScheduled,
                        yaxis: "y",
                        type: "scatter",
                    },
                ]}
                layout={{
                    width: 800,
                    height: 400,
                    title: 'Actual vs. Scheduled Trips',
                    annotations: {
                        showarrow: false,
                        text: "CTA announced schedule change<br>January 8, 2023",
                        x: "2022-11-01",
                        xref: "x",
                        y: 0.3,
                        yref: "y",
                    },
                }}
            />
            <Plot
                data={[
                    {
                        mode: "lines",
                        name: "Ratio",
                        x: timestamps,
                        xaxis: "x",
                        y: ratio,
                        yaxis: "y",
                        type: "scatter",
                    },
                ]}
                layout={{
                    width: 800,
                    height: 400,
                    title: 'Ratio of Actual vs. Scheduled',
                    annotations: {
                        showarrow: false,
                        text: "CTA announced schedule change<br>January 8, 2023",
                        x: "2022-11-01",
                        xref: "x",
                        y: 0.3,
                        yref: "y",
                    },
                }}
            />
        </div>
    );
}

export default TripRatioGraph;