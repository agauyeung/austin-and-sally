import React, { useEffect } from "react";
import styles from "./Engagement.module.css";

const adjustIFrameHeight = () => {
  const pageHeader = document.getElementById("page-header");
  const engagementHeading = document.getElementById("engagement-heading");
  const iframe = document.getElementById("engagement-iframe");
  if (pageHeader && iframe) {
    iframe.height =
      window.innerHeight -
      pageHeader.offsetHeight -
      engagementHeading.offsetHeight -
      30 +
      "px";
  }
};

export default function Engagement() {
  useEffect(() => {
    adjustIFrameHeight();
    window.addEventListener("resize", adjustIFrameHeight);
  }, []);

  return (
    <>
      <h2 id="engagement-heading" className={styles["h3"]}>
        Our Photographer:
      </h2>
      <iframe
        id="engagement-iframe"
        className={styles["iframe"]}
        src="https://crystalmak.myportfolio.com/austin-sally-proposal"
        frameBorder="0"
        title="Engagement photos"
      />
    </>
  );
}
