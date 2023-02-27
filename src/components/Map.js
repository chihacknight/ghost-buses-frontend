import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import mapRoutes from "../Routes/bus_route_shapes_simplified_linestring.json";
import resultsData from "../Routes/data.json";
import Search from "./Search";
import Modal from "./Modal";
import Filter from "./Filter";

import {
  highlightFeature,
  resetHighlight,
  setColor,
  findDataForRoute,
} from "../utils/routeStyles";

export default function Map() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoute, setSelectedRoute] = useState();

  const [filterOpen, setFilterOpen] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({
    busLines: true,
    color: true,
    reliability: {
      top10: false,
      bottom10: false,
    },
  });
  const { reliability } = currentFilters;

  // filter functionality

  const filterMapRoutes = (route) => {
    if (!reliability.top10 && !reliability.bottom10) {
      return true;
    }

    const topTen = !reliability.top10 || route.properties.ranking <= 10;
    const bottomTen = !reliability.bottom10 || route.properties.ranking >= 114;
    return topTen && bottomTen;
  };

  const availableRoutes = resultsData.features
    .filter(filterMapRoutes)
    .map((route) => route.properties.route_id)
    .filter((v, i, a) => a.indexOf(v) === i);

  const mapToDisplay = mapRoutes.features.filter((route) =>
    availableRoutes.includes(route.properties.route_id)
  );

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
      <p>
        <span>{result.properties.route_id}</span>
        {result.properties.route_long_name}
      </p>
    </div>
  ));

  // clicking a bus route opens the modal

  const onClickBusRoute = (feature) => {
    setSelectedRoute(findDataForRoute(feature));
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedRoute();
    document.body.style.overflow = "scroll";
  };

  //leaflet

  //highlight the hovered bus route

  const style = {
    color: "rgb(51, 136, 255)",
    fillColor: "rgb(51, 136, 255)",
    weight: 3,
    fillOpacity: 1,
  };

  function onEachRouteFeature(feature, layer) {
    if (feature.properties) {
      const { route_long_name, route_id } = feature.properties;
      layer.bindTooltip(`${route_id}, ${route_long_name}`, {
        sticky: true,
      });

      layer.on({
        click: () => onClickBusRoute(feature),
        mouseover: highlightFeature,
        mouseout: (e) => resetHighlight(e, currentFilters),
      });

      const routeMatch = findDataForRoute(feature)[0];
      const routeMatchPercent = routeMatch.properties.percentiles * 100;

      routeMatch &&
        layer.setStyle(
          currentFilters.color
            ? {
                weight: 4,
                fillColor: setColor(routeMatchPercent),
                color: setColor(routeMatchPercent),
                fillOpacity: 1,
              }
            : style
        );
    }
  }

  return (
    <div className="map">
      {selectedRoute && (
        <Modal selectedRoute={selectedRoute} closeModal={closeModal} />
      )}
      <MapContainer
        center={[41.881832, -87.623177]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <Filter
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          currentFilters={currentFilters}
          setCurrentFilters={setCurrentFilters}
        />
        <Search
          onChangeSearch={onChangeSearch}
          searchTerm={searchTerm}
          searchResultsElements={searchResultsElements}
        />

        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {currentFilters.busLines && (
          <GeoJSON
            data={mapToDisplay}
            onEachFeature={onEachRouteFeature}
            //map will only re-render on key change, so use current filter string as key
            key={JSON.stringify(currentFilters)}
          />
        )}
      </MapContainer>
    </div>
  );
}
