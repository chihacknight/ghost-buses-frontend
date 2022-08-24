import React, {useState} from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import mapRoutes from "../Routes/bus_route_shapes_simplified_linestring.json";
import resultsData from "../Routes/dummy_data.json";

export default function Map() {
  const [demo, setDemo] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState();
  const availableRoutes = resultsData.features
    .map((route) => route.route_id)
    .filter((v, i, a) => a.indexOf(v) === i);

  const demoMapRoutes = mapRoutes.features.filter((route) =>
    availableRoutes.includes(route.properties.route_id)
  );

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const { route_long_name, route_id } = feature.properties;
      layer.bindTooltip(`${route_id}, ${route_long_name}`, {
        sticky: true,
      });
    }
  }

  return (
    <div className="map padding-container">
      <h2>Map/Data</h2>
      <label>
        <input
          type="checkbox"
          checked={demo}
          onChange={() => setDemo((prevDemo) => !prevDemo)}
        />
        Demo
      </label>
      <MapContainer
        center={[41.881832, -87.623177]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON
          data={demo ? demoMapRoutes : mapRoutes}
          onEachFeature={onEachFeature}
          key={demo}
        />
      </MapContainer>
    </div>
  );
}
