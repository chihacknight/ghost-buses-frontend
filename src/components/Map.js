import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import mapRoutes from "../Routes/bus_route_shapes_simplified_linestring.json";
import resultsData from "../Routes/data.json";
import Search from "./Search";
import Modal from "./Modal";
import Filter from "./Filter";
import findPercentileIndex from "../utils/percentileKeys";

export default function Map() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoute, setSelectedRoute] = useState();

  const [filterOpen, setFilterOpen] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({
    color: true,
    reliability: {
      top10: false,
      bottom10: false,
    },
  });

  // filter functionality

  const filterMapRoutes = (route) => {
    if (
      !currentFilters.reliability.top10 &&
      !currentFilters.reliability.bottom10
    ) {
      return true;
    }

    const topTen =
      !currentFilters.reliability.top10 || route.properties.ratio_ranking <= 10;
    const bottomTen =
      !currentFilters.reliability.bottom10 ||
      route.properties.ratio_ranking >= 114;

    if (
      currentFilters.reliability.top10 &&
      currentFilters.reliability.bottom10
    ) {
      return topTen || bottomTen;
    } else {
      return topTen && bottomTen;
    }
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

  // modal functionality

  // clicking a bus route opens the modal

  function findDataForRoute(route_id) {
    const results = resultsData.features.filter(
      (data) => String(data.properties.route_id) === String(route_id)
    );
    return results;
  }

  const onClickBusRoute = (route_id) => {
    setSelectedRoute(findDataForRoute(route_id));
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

  const heatmap = ["#0852C1", "#8E47F3", "#D84091", "#EB4F12", "#FFED39"];

  function setColor(route) {
    const percentileIndex = findPercentileIndex(route);
    if (percentileIndex === 0 || percentileIndex === 1) {
      return heatmap[0];
    } else if (percentileIndex === 2 || percentileIndex === 3) {
      return heatmap[1];
    } else if (percentileIndex === 4 || percentileIndex === 5) {
      return heatmap[2];
    } else if (percentileIndex === 6 || percentileIndex === 7) {
      return heatmap[3];
    } else {
      return heatmap[4];
    }
  }

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const { route_long_name, route_id } = feature.properties;
      layer.bindTooltip(`${route_id}, ${route_long_name}`, {
        sticky: true,
      });

      layer.on({
        click: () => onClickBusRoute(feature.properties.route_id),
        mouseover: highlightFeature,
        mouseout: resetHighlight,
      });

      const routeMatch = findDataForRoute(feature.properties.route_id)[0];

      routeMatch &&
        layer.setStyle(
          currentFilters.color
            ? {
                weight: 4,
                fillColor: setColor(routeMatch),
                color: setColor(routeMatch),
                fillOpacity: 1,
              }
            : style
        );
    }
  }

  function highlightFeature(e) {
    let layer = e.target;

    layer.setStyle({
      weight: 4,
      fillColor: "#fff",
      color: "#fff",
      fillOpacity: 1,
    });
  }

  function resetHighlight(e) {
    let layer = e.target;
    const routeMatch = findDataForRoute(layer.feature)[0];
    layer.setStyle(
      currentFilters.color
        ? {
            color: setColor(routeMatch),
            fillColor: setColor(routeMatch),
            weight: 3,
            fillOpacity: 1,
          }
        : style
    );
  }

  return (
    <div className="map">
      {selectedRoute && (
        <Modal selectedRoute={selectedRoute} closeModal={closeModal} />
      )}
      <MapContainer
        center={[41.881832, -87.691916]}
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
          onSelect={(route_id) => onClickBusRoute(route_id)}
        />

        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON
          data={mapToDisplay}
          onEachFeature={onEachFeature}
          //map will only re-render on key change, so use current filter string as key
          key={JSON.stringify(currentFilters)}
        />
      </MapContainer>
    </div>
  );
}
