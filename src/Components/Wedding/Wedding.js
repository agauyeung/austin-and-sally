import React from "react";
import FAQ from "../FAQ";
import PhotoGroups from "../PhotoGroups";
import styles from "./Wedding.module.css";
import * as invite from "/public/images/wedding_invite.jpg";

export default function Wedding() {
  return (
    <div className="content">
      <div className={`panel ${styles.container}`}>
        <h2
          className={`${styles["desktop-header"]} ${styles["wedding-header"]} with-icon`}
        >
          Wedding Details &amp; RSVP
        </h2>
        <div className={styles["invite-wrapper"]}>
          <img src={invite.default.src} className={styles.invite} />
        </div>
        <a
          href="https://forms.gle/a4ydKwzu6e6EDn3a6"
          className={`${styles["rsvp-button"]} button`}
        >
          RSVP Now
        </a>
      </div>
      <br />
      <div className={`panel ${styles.photoGroupsContainer}`}>
        <PhotoGroups />
      </div>
      <br />
      <div className={`panel ${styles.faqContainer}`}>
        <FAQ />
      </div>
    </div>
  );
}
