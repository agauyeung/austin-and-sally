import React from "react";
import FAQ from "../FAQ/FAQ";
import styles from "./Wedding.module.css";
import * as invite from "/public/images/wedding_invite.jpg";

export default function Wedding() {
  return (
    <div className="content">
      <div className={`panel ${styles.container}`}>
        <h2>Wedding Details &amp; RSVP</h2>
        <div className={styles["invite-wrapper"]}>
          <img src={invite.default.src} className={styles.invite} />
        </div>
        <a className={styles["rsvp-button"]} href="/rsvp">
          RSVP Now
        </a>
      </div>
      <br />
      <div className="panel">
        <FAQ />
      </div>
    </div>
  );
}
