import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="padding-container footer-container">
        <div className="footer-links">
          <p> Links</p>
          <ul>
            <li>
              <a href="https://chihacknight.org/">Chi Hack Night</a>
            </li>
            <li>
              <a href="https://github.com/chihacknight/chn-ghost-buses/">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-attributions">
          <p>Attributions</p>
          <ul>
            <li>
              <a href="https://www.freepik.com/vectors/business-bag">
                Business bag vector created by pch.vector
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
