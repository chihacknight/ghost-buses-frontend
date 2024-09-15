import React from "react";

export default function DeprecationAlert() {
  return (
  <div className = "deprecation-alert">
    <p>
    As of September 2024, this site is no longer being updated. <br></br>
    Our raw data is still available for independent analysis. <br></br>
    See <a href='https://github.com/chihacknight/chn-ghost-buses/tree/main/data_analysis#readme'>this GitHub page</a> for information on how to access the raw data.
    </p>
  </div>
  );
}
