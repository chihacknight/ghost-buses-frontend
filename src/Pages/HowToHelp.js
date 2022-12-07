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
        {" "} have a petition calling upon Mayor Lori Lightfoot, CTA President Dorval
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
          is a transit advocacy organization in Chicago. CTAction is a place
          where commuters make their voices heard. CTAction makes it easy to
          submit public comments to the CTA board. You can{" "}
          <a
            href="https://docs.google.com/document/d/1Ugyly5ensRjcCuBR4D0sbdPWqLX1qVG5v_ljniI6G2w/edit"
            target="_blank"
            rel="noreferrer"
          >
            submit your comment to the board here
          </a>
          .
        </p>
      </section>
      <section>
        <h3>Transit4All Petition</h3>
        <p>
          <a
            href="https://www.transit4all.org/"
            target="_blank"
            rel="noreferrer"
          >
            Transit4All
          </a>{" "}
          is a transit campaign in Chicago. Transit4All has created a
          petition to demand that the CTA spend their $118 million funds more
          effectively to improve Chicago transit. Long term, Transit4All is
          organizing to establish a transit rider union that represents all of
          Chicago working with advocates, unions, community organizations, and
          policymakers. {" "}
          <a
            href="https://www.transit4all.org/petition_en"
            target="_blank"
            rel="noreferrer"
          >
            Sign the Transit4All petition here
          </a>.
        </p>
      </section>
    </div>
  );
};

export default HowToHelp;
