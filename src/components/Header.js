import React, { useState } from "react";
import bus from "../assets/path6.png";
import busStop from "../assets/busStop.png";
import ghostBusLogo from "../assets/ghostBusLogo.png";
import chiHackLogo from "../assets/chiHackLogo.png";

export default function Header() {
  const [pauseAnimation, setPauseAnimation] = useState(false);
  return (
    <header className={pauseAnimation ? "paused" : ""}>
      <div className="mobile-bar"></div>
      <div className="h1-container">
        <h1>Ghost Bus</h1>
        <img src={ghostBusLogo} alt="ghost bus logo" />
        <div className="subtitle-container">
          <p className="subtitle">powered by</p>
          <img src={chiHackLogo} alt="ChiHackNight logo" />
        </div>
      </div>

      <div className="svg-container"></div>
      <div className="bus-stop-container">
        <p>?</p>
        <img src={busStop} alt="" />
      </div>
      <div className="bus-container">
        <img src={bus} alt="" />
      </div>
      <button onClick={() => setPauseAnimation(prevPauseAnimation => !prevPauseAnimation)}  aria-label="pause/play bus animation" title="pause/play bus animation" >
        {!pauseAnimation && <i className="fa-solid fa-pause"></i>}
        {pauseAnimation && <i className="fa-solid fa-play"></i>}
      </button>
    </header>
  );
}
