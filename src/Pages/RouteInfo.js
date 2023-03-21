import resultsData from "../Routes/data.json";

import React from "react";
import Modal from "../components/Modal";
import { useParams } from "react-router-dom";


const closeModal = () => {
  document.body.style.overflow = "scroll";
};

function findDataForRoute(route) {
  const results = resultsData.features.filter(
    (data) =>
      String(data.properties.route_id) === route
  );
  return results;
}

const RouteInfo = () => {

  let { route } = useParams();

  return (
    <div className="page-container">
      <h1>{route}</h1>
      
      {/* <Modal selectedRoute={route} closeModal={closeModal} /> */}

    </div>
  );
};

export default RouteInfo;
