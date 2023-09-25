import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import { RidershipProvider } from "./components/Context.js";
import { ResultsProvider } from "./components/Context.js";
import React, { useState, useEffect } from "react";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import Nav from "./components/Nav";

import Home from "./Pages/Home";
import About from "./Pages/About";
import InteractiveMap from "./Pages/InteractiveMap";
import FurtherReading from "./Pages/FurtherReading";
import Methods from "./Pages/Methods";
import HowToHelp from "./Pages/HowToHelp";
import RouteStats from "./Pages/RouteStats";


const App = () => {

  //Get the Results data from the remote JSON file

  // Define state to store the loaded data
  const [resultsData, setResultsData] = useState(null);

  // Use useEffect to fetch the JSON data when the component mounts
  useEffect(() => {
    // Define the URL of the remote JSON file
    const remoteDataUrl = "https://raw.githubusercontent.com/chihacknight/ghost-buses-frontend/8e238955f7689109c032e40dc57a7b015539fc6e/src/Routes/data.json";

    // Fetch the JSON data from the remote URL
    fetch(remoteDataUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assign the fetched data to the resultsData variable
        setResultsData(data);
      })
      .catch((error) => {
        console.error("Error loading remote data.json:", error);
      });
  }, []);

  //Get the Ridership data from the remote JSON file

  // Define state to store the loaded data
  const [ridershipData, setRidershipData] = useState(null);

  // Use useEffect to fetch the JSON data when the component mounts
  useEffect(() => {
    // Define the URL of the remote JSON file
    const remoteDataUrl = "https://raw.githubusercontent.com/chihacknight/ghost-buses-frontend/main/src/Routes/july2022_cta_ridership_data_day_type_summary.json";

    // Fetch the JSON data from the remote URL
    fetch(remoteDataUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assign the fetched data to the ridershipData variable
        setRidershipData(data);
      })
      .catch((error) => {
        console.error("Error loading remote data.json:", error);
      });
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <div className="container">
        <Socials />
        <Header />
        <main id="main">
          <RidershipProvider value={{ ridershipData }}>
            <ResultsProvider value={{ resultsData }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/map" element={<InteractiveMap />} />
                <Route path="/further-reading" element={<FurtherReading />} />
                <Route path="/methods" element={<Methods />} />
                <Route path="/how-to-help" element={<HowToHelp />} />
                <Route path="/route-stats/:route" element={<RouteStats />} />
              </Routes>
            </ResultsProvider>
          </RidershipProvider>
        </main>

      </div>
      <Footer />
    </div>
  );
};

export default App;
