import React from "react";

const Methods = () => {
  return (
    <div className="page-container">
      <h1>Methodology & Results</h1>
      <h2>Data Collection</h2>
      <p>
        The real-time data is scraped from the Chicago Transit Authority's (CTA)
        bus tracker API's{" "}
        <a
          href="https://www.transitchicago.com/developers/bustracker/"
          target="_blank"
          rel="noreferrer"
        >
          getvehicles feed
        </a>{" "}
        every five minutes. Data collection started on 20 May 2022 and continues
        to date. The scraped data is returned as JSON files, of which there may
        be hundreds per day, and stored in Amazon's Simple Storage Service (S3).
      </p>
      <p>
        Schedule data is collected from the CTA General Transit Feed
        Specification (GTFS) feed for recent feeds and from{" "}
        <a
          href="https://transitfeeds.com/p/chicago-transit-authority/165"
          target="_blank"
          rel="noreferrer"
        >
          transitfeeds.com
        </a>{" "}
        for historical feeds. At the time of writing, neither of these are
        scraped automatically, although there are {" "}
        <a
          href="https://github.com/chihacknight/chn-ghost-buses/issues/18"
          target="_blank"
          rel="noreferrer"
        >
          plans
        </a>{" "}
         to do so. For more
        information on data collection, see the documentation {" "}
        <a
          href="https://www.transitchicago.com/developers/gtfs/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
         .
      </p>
      <p>
        The schedule data is downloaded as a zip file containing files such as
        agency.txt, calendar.txt, calendar_dates.txt, routes.txt,
        frequencies.txt, shapes.txt, stops.txt, stop_times.txt, transfers.txt,
        and trips.txt. More information on these files can be found here.
      </p>
      <h2>Data Aggregation</h2>
      <h3>Schedule Data</h3>
      <p>
        In calendar.txt, a combination of all possible dates and services is
        created by cross joining all dates in the range provided by the calendar
        data with the actual calendar data. The data is then reshaped so that
        there is one column that contains day of the week information as opposed
        to one column per day of the week. Dates that fall outside of the
        calendar's date range are left alone so that there are no missing
        values. The data is then filtered so that only service that actually
        happened remains. The result is merged with the trips data based on the
        service_id.
      </p>
      <p>
        The merged data is then aggregated daily by counting the total number of
        trips by route and date. The result is saved in S3. The daily aggregated
        data has three columns for the date, route_id, and number of trips.
      </p>
      <h3>Real-time data</h3>
      <p>
        The JSON files that are scraped every five minutes from the CTA bus
        tracker are combined into two types of daily comma-separated values
        (CSV) files: data and errors. The data file contains the valid bus
        location information; the errors file is typically the result of there
        being no active trips for a route at the time of the request. The CSV
        files are generated daily between 10 and 11 am Central Time for the
        previous day. So if you are checking on 02 October 2022 after 11 am, for
        example, data will be available up to and including 01 October 2022.
        Otherwise, the latest available data will be for 30 September 2022.
      </p>
      <h3>Comparison of real-time and schedule data</h3>
      <p>
        A list of schedule versions starting from the beginning of data
        collection on 20 May 2022 to date is compiled from {" "}
        <a
          href="https://transitfeeds.com/p/chicago-transit-authority/165"
          target="_blank"
          rel="noreferrer"
        >
          transitfeeds.com
        </a>
        .
        Each schedule feed in the list is downloaded, and the real-time daily
        data for the corresponding date is also loaded from the saved CSV file
        in S3. Both the real-time and schedule data are summarized by adding up
        the number of trips per route and date. The resulting summaries are
        merged based on the date and route_id. A new variable day_type is
        created in the merged data that takes the values 'weekday', 'sat',
        'sun', and 'holiday'. The merged data is then grouped by route_id and
        day_type to produce the total number of trips by route and type of day.
        Lastly, the ratio of actual trips to scheduled trips is created by
        dividing the total number of real-time trips by the total number of
        scheduled trips.
      </p>
    </div>
  );
};

export default Methods;
