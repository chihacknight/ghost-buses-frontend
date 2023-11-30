import React from "react";

const About = () => {
  return (
    <div className="page-container about">
      <div className="chn-details">
        <h2>About Chi Hack Night</h2>
        <p>
          Chi Hack Night is a free, weekly event in Chicago to build, share, and
          learn about tools to serve the public good. Chi Hack Night relies on
          volunteers who want to make our city more just, equitable,
          transparent and delightful to live in through data, design, and
          technology. Chi Hack Night is registered as a not-for-profit 501(c)(3)
          charitable organization.
        </p>
      </div>

      <div className="btn-container">
        <a href="https://chihacknight.org/" target="_blank" rel="noreferrer">
          <button className="action-btn">
            <strong>Get Involved</strong> with <strong>CHN</strong>
          </button>
        </a>
      </div>
      <div className="gb-details">
        <h2>About the Ghost Bus team</h2>
        <p>
          The Ghost Bus project is run by volunteer Chicagoans who have an
          interest in making Chicago better through data and technology. The
          group welcomes contributions from folks of any background whether in
          technology like data science, front- or back-end software engineering,
          and web-development, or backgrounds in journalism, policy,
          copywriting, community organizing and activism. Come join us!
        </p>
      </div>
      <div className="btn-container">
        <a
          href="https://github.com/chihacknight/breakout-groups/issues/217"
          target="_blank"
          rel="noreferrer"
        >
          <button className="action-btn">
            <strong>Get Involved</strong> with <strong>Ghost Bus</strong>
          </button>
        </a>
      </div>
      <div className="gb-impact">
        <h2>About Our Impact</h2>
        <p>
          Throughout the time Ghost Buses has existed, we've been open to providing people and organizations access to our data to aid others with their causes or purposes. Some towards a more informed and improved Chicago transit system, others towards learning and growth using relatable data. Some of them include:
        </p>
        <ul>
          <li>
            <a
              href="https://twitter.com/ctaaction"
              target="_blank"
              rel="noreferrer">Commuters Take Action
            </a> compared scheduled train arrivals with actual run trains, then posted the percentage breakdown of each train line.
          </li>
          <li>
            <a
              href="https://twitter.com/activetrans"
              target="_blank"
              rel="noreferrer">Active Transportation Alliance
            </a> advocated for commuters by revealing ghost buses along specific routes.
          </li>
          <li>
            <a
              href="https://www.equiticity.org/"
              target="_blank"
              rel="noreferrer">Equiticity
            </a> examined bus reliability in North Lawndale."</li>
          <li>Ethan A. composed a data analysis paper.</li>
          <li>Kristen H. analyzed actual and scheduled headways as a learning exercise.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;