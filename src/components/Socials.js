import React from "react";
import CHNsocial from "../assets/CHNsocial.png";

const Socials = () => {
  return (
    <div className="social-sidebar">
      <a href="https://twitter.com/chihacknight">
        <div className="social-icon twitter">
          <i className="fa-brands fa-twitter"></i>
        </div>
      </a>
      <a href="https://github.com/lauriemerrell/chn-ghost-buses">
        <div className="social-icon github">
          <i className="fa-brands fa-github"></i>
        </div>
      </a>
      <a href="https://chihacknight.org/">
        <div className="social-icon chn">
          <img src={CHNsocial} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Socials;
