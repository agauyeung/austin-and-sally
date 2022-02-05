import React from "react";
import styles from "./RSVP.module.css";

//Deprecated
export default function RSVP() {
  return (
    <div className="content">
      <div className={`panel ${styles["panel"]}`}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSevE_Xuc37nDuOZvZv4QpqxrPa1Vax6QlUPZi1vOHyVaBVqcg/viewform?embedded=true"
          height="2995"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className={styles["form"]}
        >
          Loading…
        </iframe>
        <div className={styles.help}>
          If you aren't redirected to a confirmation page after submitting, it
          unfortunately hasn't gone through. You may have to scroll up to the
          top of the form to answer the Captcha question. If that doesn't work
          either, please contact either of us and we will try to help you
          through it!
        </div>
      </div>
    </div>
  );
}
