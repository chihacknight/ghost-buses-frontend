import React from "react";
import Plot from 'react-plotly.js';

function TripRatioGraph({route_id}) {
    return (
        <div className="trip-performance-graph">
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{ width: 320, height: 240, title: 'Plot' }}
            />
        </div>
    );
}

export default TripRatioGraph;