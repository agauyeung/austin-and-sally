import React from "react";
import styles from "./RSVP.module.css";

export default function RSVP() {
  return (
    <div className="content">
      <div className={`panel ${styles["panel"]}`}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSevE_Xuc37nDuOZvZv4QpqxrPa1Vax6QlUPZi1vOHyVaBVqcg/viewform?embedded=true"
          height="2500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className={styles["form"]}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}