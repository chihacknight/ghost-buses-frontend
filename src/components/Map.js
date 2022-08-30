import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import Modal from "./Modal";
import mapRoutes from "../Routes/bus_route_shapes_simplified_linestring.json";
import resultsData from "../Routes/dummy_data.json";
import Search from "./Search";
import Filter from "./Filter";

export default function Map() {
  const [selectedRoute, setSelectedRoute] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({
    demo: false,
    geography: {
      westside: false,
      southside: false,
      northside: false,
    },
  });

  //map routes to be displayed

  const filterMapRoutes = (route) => {
    if (
      !currentFilters.geography.westside &&
      !currentFilters.geography.southside &&
      !currentFilters.geography.northside
    ) {
      return true;
    }

    const westsideRoutes =
      !currentFilters.geography.westside || route.service.includes("westside");
    const southsideRoutes =
      !currentFilters.geography.southside ||
      route.service.includes("southside");
    const northsideRoutes =
      !currentFilters.geography.northside ||
      route.service.includes("northside");

    return westsideRoutes && southsideRoutes && northsideRoutes;
  };

  const availableRoutes = resultsData.features
    .filter(filterMapRoutes)
    .map((route) => route.route_id)
    .filter((v, i, a) => a.indexOf(v) === i);

  const demoMapRoutes = mapRoutes.features.filter((route) =>
    availableRoutes.includes(route.properties.route_id)
  );

  //search functionality

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const searchResults = demoMapRoutes
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

  function onClickBusRoute(feature) {
    const results = resultsData.features.filter(
      (data) => Number(data.route_id) === Number(feature.properties.route_id)
    );
    setSelectedRoute(results);
  }

  function closeModal() {
    setSelectedRoute();
  }

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
      <label>
        <input
          type="checkbox"
          checked={currentFilters.demo}
          onChange={() =>
            setCurrentFilters((prevFilters) => {
              return { ...prevFilters, demo: !prevFilters.demo };
            })
          }
        />
        Demo
      </label>
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
        <Filter
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          currentFilters={currentFilters}
          setCurrentFilters={setCurrentFilters}
        />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON
          data={currentFilters.demo ? demoMapRoutes : mapRoutes}
          onEachFeature={onEachFeature}
          key={JSON.stringify(currentFilters)}
        />
      </MapContainer>
    </div>
  );
}
