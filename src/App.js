import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";

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
import RouteInfo from "./Pages/RouteInfo";

const App = () => {
  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <div className="container">
        <Socials />
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/further-reading" element={<FurtherReading />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/how-to-help" element={<HowToHelp />} />
            <Route path="/route-info/:route" element={<RouteInfo />} />
          </Routes>
        </main>

      </div>
      <Footer />
    </div>
  );
};

export default App;
