import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import mapRoutes from "../Routes/bus_route_shapes_simplified_linestring.json";
import resultsData from "../Routes/data.json";
import wardRankings from "../Routes/ward_data.json";
import Modal from "./Modal";
import Filter from "./Filter";

import {
  highlightFeature,
  resetHighlight,
  setColor,
  findDataForRoute,
} from "../utils/routeStyles";

export default function WardMap() {
  const [selectedRoute, setSelectedRoute] = useState();

  const [filterOpen, setFilterOpen] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({
    busLines: false,
    color: true,
    wards: {
      selectedWard: null,
      wardsShowing: true,
    },
  });
  const { wards } = currentFilters;

  const selectedWardFeature = wardRankings.features.find(
    (feature) => feature.properties.ward === wards.selectedWard
  );

  // filter functionality

  const filterMapRoutes = (route) => {
    if (!wards.selectedWard) {
      return true;
    }

    const wardMatches =
      !wards.selectedWard ||
      selectedWardFeature.properties.routes.includes(
        ` ${route.properties.route_id} `
      );
    return wardMatches;
  };

  const availableRoutes = resultsData.features
    .filter(filterMapRoutes)
    .map((route) => route.properties.route_id)
    .filter((v, i, a) => a.indexOf(v) === i);

  const mapToDisplay = mapRoutes.features.filter((route) =>
    availableRoutes.includes(route.properties.route_id)
  );

  // modal functionality

  // clicking a bus route opens the modal

  const onClickBusRoute = (feature) => {
    setSelectedRoute(findDataForRoute(feature));
    document.body.style.overflow = "hidden";
  };

  const onClickWard = (feature) => {
    debugger;
    setCurrentFilters((prevfilters) => {
      return {
        ...prevfilters,
        busLines: true,
        wards: {
          ...prevfilters.wards,
          selectedWard: feature.properties.ward,
        },
      };
    });
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

      const routeMatch =
        findDataForRoute(feature)[0].properties.percentiles * 100;

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

  const wardStyle = {
    weight: 1,
    fillOpacity: 0.2,
    color: "white",
  };

  function onEachWardFeature(feature, layer) {
    if (feature.properties) {
      const { ward, median_percentiles } = feature.properties;
      layer.bindTooltip(`Ward ${ward}`, {
        sticky: true,
      });
      layer.setStyle(
        wards.selectedWard || !currentFilters.color
          ? wardStyle
          : {
              ...wardStyle,
              color: setColor(median_percentiles * 100),
            }
      );

      layer.on({
        click: () => onClickWard(feature),
        mouseover: highlightWard,
        mouseout: resetHighlightWard,
      });
    }
  }

  function highlightWard(e) {
    let layer = e.target;

    layer.setStyle({
      fillOpacity: 0.7,
    });
  }

  function resetHighlightWard(e) {
    let layer = e.target;

    layer.setStyle({
      fillOpacity: 0.2,
    });
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
        <button
          className="route-close-btn"
          onClick={() =>
            setCurrentFilters((prevfilters) => {
              return {
                ...prevfilters,
                busLines: false,
                wards: {
                  ...prevfilters.wards,
                  selectedWard: null,
                },
              };
            })
          }
        >
          Clear Routes
        </button>
        <Filter
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          currentFilters={currentFilters}
          setCurrentFilters={setCurrentFilters}
          wardFilter
        />

        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {currentFilters.wards.wardsShowing && (
          <GeoJSON
            data={wardRankings.features}
            onEachFeature={onEachWardFeature}
            key={JSON.stringify(currentFilters)}
          />
        )}
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
