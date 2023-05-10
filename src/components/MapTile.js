import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import mapRoutes from "../Routes/bus_route_shapes_simplified_linestring.json";

export default function TileMap({ route_id }) {
  const lineToDisplay = mapRoutes.features.filter(
    (x) => x.properties.route_id === route_id
  );

  const bbox = require("geojson-bbox");
  const extent = bbox(lineToDisplay[0]);

  const bounds = [
    [extent[1], extent[0]],
    [extent[3], extent[2]],
  ];

  return (
    <div className="tile-map">
      <MapContainer key={route_id} scrollWheelZoom={false} bounds={bounds}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON
          data={lineToDisplay}
          //map will only re-render on key change, so use current filter string as key
          key={route_id}
        />
      </MapContainer>
    </div>
  );
}
