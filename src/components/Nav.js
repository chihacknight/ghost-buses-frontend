import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Map", link: "/map" },
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
          <div className="dot-line"></div>
          <ul>
            {links.map((link) => {
              return (
                <div key={link.link} className="dot-nav-pair">
                  <Link onClick={toggle} to={link.link}>
                    <li className="floating-label">{link.title}</li>
                    <div className="dot"></div>
                  </Link>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
