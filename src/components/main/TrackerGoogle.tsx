"use client";
// import { useEffect } from "react";
// import ReactGA from "react-ga4";
// export default function Tracker() {

//   useEffect(() => {
//     if (gaMeasurementId) {
//       ReactGA.initialize(gaMeasurementId);
//       ReactGA.send({
//         hitType: "pageview",
//         page: "/",
//         title: document.title,
//       });
//     } else {
//       console.error("GA Measurement ID is not defined");
//     }
//   }, [gaMeasurementId]);

//   return <div></div>;
// }

import { useEffect } from "react";
import ReactGA from "react-ga4";

const Analytics = () => {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (gaMeasurementId) {
      ReactGA.initialize(gaMeasurementId);
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      }); // Re-enable pageview tracking
    } else {
      console.error("GA Measurement ID is not defined");
    }
  }, [gaMeasurementId]);

  return null;
};

export default Analytics;
