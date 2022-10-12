import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import mapRoutes from "../Routes/bus_route_shapes_simplified_linestring.json";
import resultsData from "../Routes/data.json";

import Search from "./Search";
import Modal from "./Modal";

export default function Map() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoute, setSelectedRoute] = useState();

  //search functionality

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const searchResults = resultsData.features
    .filter((route) => {
      return (
        String(route.properties.route_id) +
        route.properties.route_long_name.toLowerCase()
      ).includes(searchTerm);
    })
    .filter((route) => {
      return !route.properties.direction.includes("South");
    })
    .filter((route) => {
      return !route.properties.direction.includes("West");
    })
    .filter((route) => {
      return route.properties.day_type === "wk";
    });

  const searchResultsElements = searchResults.map((result) => (
    <div
      key={result.id}
      className="search-result"
      onClick={() => onClickBusRoute(result)}
    >
      <p>{result.properties.route_long_name}</p>
    </div>
  ));

  // modal functionality

  const onClickBusRoute = (feature) => {
    const results = resultsData.features.filter(
      (data) =>
        String(data.properties.route_id) === String(feature.properties.route_id)
    );
    setSelectedRoute(results);
  };

  const closeModal = () => {
    setSelectedRoute();
  };

  //leaflet

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const { route_long_name, route_id } = feature.properties;
      layer.bindTooltip(`${route_id}, ${route_long_name}`, {
        sticky: true,
      });

      layer.on({
        click: () => onClickBusRoute(feature),
      });
    }
  }

  return (
    <div className="map padding-container">
      <h2>Map/Data</h2>
      {selectedRoute && (
        <Modal selectedRoute={selectedRoute} closeModal={closeModal} />
      )}
      <MapContainer
        center={[41.881832, -87.623177]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <Search
          onChangeSearch={onChangeSearch}
          searchTerm={searchTerm}
          searchResultsElements={searchResultsElements}
        />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON data={mapRoutes} onEachFeature={onEachFeature} />
      </MapContainer>
    </div>
  );
}
