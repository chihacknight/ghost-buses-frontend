import resultsData from "../Routes/data.json";

import findPercentileIndex from "./percentileKeys";

export function findDataForRoute(feature) {
  const results = resultsData.features.filter(
    (data) =>
      String(data.properties.route_id) === String(feature.properties.route_id)
  );
  return results;
}

const style = {
  color: "rgb(51, 136, 255)",
  fillColor: "rgb(51, 136, 255)",
  weight: 3,
  fillOpacity: 1,
};

const heatmap = ["#0852C1", "#8E47F3", "#D84091", "#EB4F12", "#FFED39"];

export function setColor(route) {
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

export function highlightFeature(e) {
  let layer = e.target;

  layer.setStyle({
    weight: 4,
    fillColor: "#fff",
    color: "#fff",
    fillOpacity: 1,
  });
}

export function resetHighlight(e, currentFilters) {
  let layer = e.target;
  const routeMatch =
    findDataForRoute(layer.feature)[0].properties.percentiles * 100;
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
