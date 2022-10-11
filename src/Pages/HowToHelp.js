import React from "react";

const HowToHelp = () => {
  return (
    <div className="page-container">
      <h2>How To Help</h2>
      <section>
        <h3>Sign the Petition</h3>
        Looking for a way to help reduce Ghost Buses? Sign this petition. The
        petition is to call upon Mayor Lori Lightfoot, CTA President Forval
        Carter, and the Chicago Transit Board to be accountable to the people of
        Chicago and take immediate action to improve Chicago transit service and
        reliability. This petition is sponsored by{" "}
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
        . As of 9/27/22, 2,470 letters of the goal of 3,200 letters have been
        sent.
        <div className="btn-container petition-btn-container">
          <a
            href="https://actionnetwork.org/letters/commuters-take-action"
            target="_blank"
            rel="noreferrer"
          >
            <button className="action-btn petition-btn">
              <strong>Sign</strong> the <strong>Petition</strong>
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
            submit yours here
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
          is a transit campaign in Chicago. Recently, Transit4All has created a
          petition to demand that the CTA spend their $118 million funds more
          effectively to improve Chicago transit. Long term, Transit4All is
          organizing to establish a transit rider union that represents all of
          Chicago working with advocates, unions, community organizations, and
          policymakers. Sign their petition{" "}
          <a
            href="https://www.transit4all.org/petition_en"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>.
        </p>
        <h3>2023 RTA planning survey</h3>
        <p>
          The RTA is the regional transportation authority and is the parent
          organization of: Metra, L, and CTA. The RTA is looking for responses
          to their 2023 RTA planning survey. The survey asks respondents to
          compare their current RTA ridership frequency now and before COVID and
          to choose options for RTA priorities (improving safety, accessibility,
          economic development, transition to zero-emission vehicles).{" "}
          <a
            href="https://wedaylight.surveysparrow.com/s/priority-actions-survey/tt-34fb94"
            target="_blank"
            rel="noreferrer"
          >
            Take the survey here
          </a>.
        </p>
      </section>
    </div>
  );
};

export default HowToHelp;
