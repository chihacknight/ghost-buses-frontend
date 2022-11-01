import React from "react";
import Map from "../components/Map";

const InteractiveMap = () => {
  return (
    <div className="page-container">
      <h1>Interactive Map</h1>
      <Map />

      <h2>Welcome to the Map Beta!</h2>
      <p>
        Use the map above to explore all of Chicago's 127 bus lines.  
      </p>
      <ul>
        <li>Click a
        route or use the search bar to open route-specific details.</li>
        <li>Use the filter to compare the performance of different bus lines
        across Chicago.</li>
      </ul>
      <h3> See a Bug? Have an Idea?</h3>
      <p>
        {" "}
        We would love to hear from you! Feel free to submit issue to us through
        our GitHub - in our frontend repository for any visual or map issues,
        and our backend if you're noticing any issues with our data.
      </p>
      <p>
        {" "}
        For a list of planned upcoming additions to this project, please visit
        our Github
      </p>
      <p>If you want to get involved, you can join our Tuesday Chi Hack Night breakout group. Read more about that here.</p>
      <p>
        Finally, if you have feedback for us on this project, you can always
        reach out to us on Twitter!
      </p>
      <div className="btn-container">
        <a href="https://github.com/chihacknight/ghost-buses-frontend" target="_blank" rel="noreferrer">
          <button className="action-btn">
            Frontend Repository
          </button>
        </a>
        <a href="https://github.com/chihacknight/chn-ghost-buses/" target="_blank" rel="noreferrer">
          <button className="action-btn">
            Data Repository
          </button>
        </a>
        <a href="https://twitter.com/ghostbuses" target="_blank" rel="noreferrer">
          <button className="action-btn">
            Ghost Bus Twitter
          </button>
        </a>
      </div>
    </div>
  );
};

export default InteractiveMap;
