"use client";
import { useEffect } from "react";
import ReactGA from "react-ga4";
export default function Tracker() {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (gaMeasurementId) {
      ReactGA.initialize(gaMeasurementId);
      ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: document.title,
      });
    } else {
      console.error("GA Measurement ID is not defined");
    }
  }, [gaMeasurementId]);

  return <div></div>;
}
