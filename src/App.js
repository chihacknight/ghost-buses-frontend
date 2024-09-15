import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import { RidershipProvider } from "./components/Context.js";
import { ResultsProvider } from "./components/Context.js";

import Header from "./components/Header";
import DeprecationAlert from "./components/DeprecationAlert";
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

//These two files are currently coupled in various components directly to the data.
//The first step in decoupling them is to move them into the Map component and then
//use a context provider to pass the data to the other components that need it.
//In our case, these will be children of MapContainer and Modal.
import resultsData from "./Routes/data.json";
import ridershipData from "./Routes/cta_ridership_data_day_type_summary.json";



const App = () => {
  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <div className="container">
        <Socials />
        <DeprecationAlert />
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
