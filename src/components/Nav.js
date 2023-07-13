import React, { useState } from "react";
import { Link } from "react-router-dom";

import busNavIcon from "../assets/bus-nav-icon.png";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Map", link: "/map" },
    { title: "Route Statistics", link: "/route-stats/1" },
    { title: "Methods", link: "/methods" },
    { title: "Further Readings", link: "/further-reading" },
    { title: "How To Help", link: "/how-to-help" },
  ];
  function toggle() {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  }

  return (
    <div className="nav-header-bar">
      <div className={`nav-container ${navOpen ? "open" : ""}`}>
        <button
          className={`nav-toggle ${navOpen ? "open" : ""}`}
          onClick={toggle}
          aria-label="toggle navigation"
        >
          <span className="hamburger"> </span>
        </button>
        <nav className={navOpen ? "open" : ""}>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.link} className="nav-link">
                   <img src={busNavIcon} alt="" />
                  <Link onClick={toggle} to={link.link}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
