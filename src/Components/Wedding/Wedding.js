import React from "react";
import FAQ from "../FAQ/FAQ";
import styles from "./Wedding.module.css";
import * as invite from "/public/images/wedding_invite.jpg";

export default function Wedding() {
  return (
    <div className="content">
      <div className={`panel ${styles.container}`}>
        <h2 className={styles["desktop-header"]}>Wedding Details &amp; RSVP</h2>
        <div className={styles["invite-wrapper"]}>
          <img src={invite.default.src} className={styles.invite} />
        </div>
        <a className={`${styles["rsvp-button"]} button`} href="/rsvp">
          RSVP Now
        </a>
      </div>
      <br />
      <div className={`panel ${styles.faqContainer}`}>
        <FAQ />
      </div>
    </div>
  );
}
