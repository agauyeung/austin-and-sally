import React from "react";
import FAQ from "../FAQ/FAQ";
import styles from "./Wedding.module.css";
import * as invite from "/public/images/wedding_invite.jpg";

export default function Wedding() {
  return (
    <div className="content">
      <div className={`panel ${styles.container}`}>
        <a
          href="https://goo.gl/maps/1Thmcx4MnthezoiK8"
          className={styles.mapLink}
        >
          <img src={invite.default.src} className={styles.invite} />
        </a>
        <a className={styles.rsvpButton} href="/rsvp">
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
