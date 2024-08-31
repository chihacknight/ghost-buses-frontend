import React from "react";

const HowToHelp = () => {
  return (
    <div className="page-container">
      <h1>How To Help</h1>
      <section>
        <h2>Send a petition letter</h2>
        Looking for a way to help reduce Ghost Buses?{" "}
        <a
          href="https://www.betterstreetschicago.org/"
          target="_blank"
          rel="noreferrer"
        >
          Better Streets Chicago
        </a>{" "}
        and{" "}
        <a href="https://www.ctaction.org/" target="_blank" rel="noreferrer">
          Commuters Take Action
        </a>
        {" "} have a petition calling upon Mayor Brandon Johnson, CTA President Dorval
        Carter, and the Chicago Transit Board to be accountable to the people of
        Chicago and take immediate action to improve Chicago transit service and
        reliability. 
        <div className="btn-container petition-btn-container">
          <a
            href="https://actionnetwork.org/letters/commuters-take-action"
            target="_blank"
            rel="noreferrer"
          >
            <button className="action-btn petition-btn">
              <strong>Send</strong> a <strong>Petition Letter</strong>
            </button>
          </a>
        </div>
      </section>
      <section>
        <h2>Get Involved Further</h2>
        <h3>Commuters Take Action</h3>
        <p>
          <a href="https://www.ctaction.org/" target="_blank" rel="noreferrer">
            Commuters Take Action
          </a>{" "}
          is a transit advocacy organization in Chicago where commuters make their voices heard. CTAction makes it easy to
          submit public comments to the CTA board.{" "}
          <a
            href="https://docs.google.com/document/d/1Ugyly5ensRjcCuBR4D0sbdPWqLX1qVG5v_ljniI6G2w/edit"
            target="_blank"
            rel="noreferrer"
          >
            Submit your comment to the board
          </a>
          .
        </p>
      </section>
      <section>
        <h3>Volunteer to support better bus lanes</h3>
        <p>
          
           <a
            href="https://www.transit4all.org/"
            target="_blank"
            rel="noreferrer"
          >Transit 4 all</a>

            <a
            href="https://www.betterstreetschicago.org/"
            target="_blank"
            rel="noreferrer"
          >Better Streets Chicago</a> is a transit advocacy organization that works to make Chicago more livable, equitable, and safe. They advocate for better walking, biking, and transit infrastructure. Their Better Bus Lane project is seeking volunteers to collect data about bus delays and lane obstructions for three of the city’s newest bus routes.

          <a
            href="https://www.betterstreetschicago.org/better-bus-lanes"
            target="_blank"
            rel="noreferrer"
          >
            Volunteer to collect bus data
          </a>
                <a
            href="https://www.betterstreetschicago.org/getinvolved"
            target="_blank"
            rel="noreferrer"
          >
            Get involved with Better Streets Chicago
          </a>
        </p>
      </section>
    </div>
  );
};

export default HowToHelp;
