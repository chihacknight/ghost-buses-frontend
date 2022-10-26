import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-container">
      <h2> What is a Ghost Bus?</h2>
      <p>
        You’re waiting to catch your bus. The schedule app says it’ll be there
        in two minutes. You wait, and no bus comes. Now you’re stranded. Should
        you spring for an expensive rideshare? Should you start walking?
      </p>
      <div className="block-quote">
        <h4>
          "If there's one thing most Chicagoans can agree on nowadays, it's that
          CTA service has become <span>unacceptably unreliable</span>"
        </h4>
        <a href="https://chi.streetsblog.org/2022/06/22/alderperons-turn-up-the-heat-on-cta-to-explain-how-the-agency-will-fix-service-gaps/">
          -- Streetsblog Chicago, Jun 22nd, 2022
        </a>
      </div>
      <p>
        If you’re a regular rider of the CTA, odds are you’ve been “ghosted” by
        your bus. While the pandemic put an understandable strain on transit
        systems, these days Chicago residents have commitments that require
        travel, and the CTA is struggling to keep up. Most importantly, the
        CTA's official schedules do not represent this change in service,
        leading to confusion, delays, and a general sense of distrust in our
        city’s public transit.
      </p>

      <p>
        Ghost Bus is a ChiHackNight project conducted by volunteer data
        scientists, engineers, and researchers. Our project compares open source
        real-time bus tracking data to the CTA’s official schedules to identify
        gaps in service across Chicago’s 129 bus lines.
      </p>

      <div className="btn-container">
        <Link to="/">
          <button className="action-btn">
            See your bus on our <strong>interactive map</strong>
          </button>
        </Link>
        <Link to="/">
          <button className="action-btn">
            See local <strong>news stories</strong> about ghost buses
          </button>
        </Link>
        <Link to="/">
          <button className="action-btn">
            Want to help? <strong>Here’s what to do next</strong>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
