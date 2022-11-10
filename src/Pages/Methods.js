import React from "react";

const Methods = () => {
  return (
    <div className="page-container">
      <h1>Methodology & Results</h1>
      <h2>Data overview</h2>
      <p>
        At a high level, this project compares real-time data (data that indicates which bus trips 
        actually happened) with schedule data (the trips that the CTA said in advance would happen). 
        Currently, the information shown on the website reflects data collected from May 20 to November 5, 2022.
      </p>

      <p>
        The real-time data is scraped from the CTA bus tracker API 
        {" "}
        <a
          href="https://www.transitchicago.com/developers/bustracker/"
          target="_blank"
          rel="noreferrer"
        >
          getvehicles feed
        </a>
        {" "} every five minutes. Data collection started on 20 May 2022 and continues to date, though the data 
        on this site is not yet automatically updated. Every day we scrape the raw data in the form of hundreds JSON files, 
        which we store in Amazon Web Service’s Simple Storage Service (S3). We are only using the getvehicles 
        feed, and not the feed that predicts bus arrivals at specific stops or any of the{" "}
        <a 
          href="https://www.transitchicago.com/assets/1/6/cta_Bus_Tracker_API_Developer_Guide_and_Documentation_20160929.pdf"
          target="_blank"
          rel="noreferrer">
          other bus data feeds that the CTA makes available.
        </a>
      
      </p>
      <p>
        Schedule data is collected from the CTA General Transit Feed Specification (GTFS) feed data. 
        A list of schedule versions starting from the beginning of data collection on 20 May 2022 up to 
        the current date is compiled from{" "}
        <a
          href="https://transitfeeds.com/p/chicago-transit-authority/165"
          target="_blank"
          rel="noreferrer"
        >
        transitfeeds.com
        </a>
        . The schedule versions are deemed to be in-effect based on when they were online. 
        Days that a new schedule feed was published by CTA are excluded from analysis. At the time of writing, 
        we don’t scrape these automatically (so we have to manually process schedule feed versions), although 
        there are {" "}
        <a
          href="https://github.com/chihacknight/chn-ghost-buses/issues/18"
          target="_blank"
          rel="noreferrer"
        >
          plans
        </a>{" "}
        to automate more of this. 
        More information on the GTFS schedule files can be found on the {" "}
        <a
          href="https://www.transitchicago.com/developers/gtfs/"
          target="_blank"
          rel="noreferrer"
        >
          CTA's GTFS page
        </a>{" "} or on {" "}
        <a
          href="https://gtfs.org"
          target="_blank"
          rel="noreferrer"
        >
          gtfs.org
        </a>.
      </p>
      <h2>See our data and code</h2>
      <p>
        For more information on data collection, or to access our raw data yourself, see the 
        {" "}
          <a
            href="https://github.com/chihacknight/chn-ghost-buses/blob/main/data_analysis/README.md"
            target="_blank"
            rel="noreferrer"
          >
            documentation on our GitHub repo
          </a>. 
        Our S3 bucket is public and updates continuously, while data on the website 
        is currently fixed for the period May 20 - November 5, 2022. 

        Our {" "}
        <a
          href="https://github.com/chihacknight/chn-ghost-buses/tree/main/scrape_data"
          target="_blank"
          rel="noreferrer"
        >
          data scraping code
        </a>{" "} and 
        {" "}
        <a
          href="https://github.com/chihacknight/chn-ghost-buses/tree/main/data_analysis"
          target="_blank"
          rel="noreferrer"
        >
          data analysis code
        </a>{" "}  are also available.

        If you find a bug in our data or code, please feel free to{" "}
        <a
          href="https://github.com/chihacknight/chn-ghost-buses/issues/new"
          target="_blank"
          rel="noreferrer"
        >
          submit an issue in the repo
        </a>{" "}
          or 
         {" "}
        <a
          href="mailto:ghostbuseschicago@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          contact us directly
        </a>.
      </p>
      <h2>Data notes and limitations</h2>
      <p>
        It is important to acknowledge that real-time data is not perfect. GPS devices can fail or break, 
        for example, and so it’s possible that there are bus trips that did happen but are not captured in 
        the real-time data. 
      </p>
      <p>
        That being said, the data we are scraping represents the data that the CTA is making available to 3rd party
        bus-tracking apps and to riders. Riders make decisions based on the data that is available at the time 
        they travel. This means that inaccurate or missing real-time data can affect riders’ ability to plan 
        their journeys, even if there are more trips actually occurring than are counted in the real-time data. 
        Real-time data captures the trips that a rider could have known about if they were checking 
        a tracking app or service, even if it does not completely capture all trips that occurred.
      </p>
      <p>
        This is an all-volunteer project, and for our current launch we have not done granular row-level 
        data cleaning. We observed, for example, that for a small number of trips on the 74 Fullerton bus, 
        the trip ID was missing and was only listed as a series of asterisks (like ********). We have not 
        added any special handling or cleaning for that, so we may be slightly undercounting the number of 
        actual trips that occurred on that route. We have no reason to believe that these issues are widespread 
        or common enough to affect overall data trends or high-level conclusions.
      </p>
      <p>
        If you would like to help us improve our data cleaning, we would love to have you! 
        You can find out how to{" "}
        <a
          href="https://github.com/chihacknight/breakout-groups/issues/217"
          target="_blank"
          rel="noreferrer"
        >
          join the breakout group here
        </a>. 
      </p>
    </div>
  );
};

export default Methods;
