import React from "react";
import WardMap from "../components/WardMap";

const InteractiveWardMap = () => {
  return (
    <div className="page-container">
      <h1>Ward-Based Interactive Map</h1>

      <p>
        Click a ward to see the routes that pass through it.
      </p>

      <WardMap />

      <h2>Welcome to the Ward Map Beta!</h2>
      <p>
        This map allows you to filter bus route reliability by the 2023 ward boundaries.
      </p>
      <ul>
        <li>Click a ward to see the bus routes that pass through it</li>
        <li>Click a bus route for more information</li>
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
        our GitHub pages.
      </p>
      <p>If you want to get involved, you can join our Tuesday Chi Hack Night breakout group.</p>
      <p>
        Finally, if you have feedback for us on this project, you can always
        reach out to us on Twitter!
      </p>
      <div className="btn-container">
      <a href="https://github.com/chihacknight/breakout-groups/issues/217" target="_blank" rel="noreferrer">
          <button className="action-btn">
            Breakout group information
          </button>
        </a>
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

export default InteractiveWardMap;
