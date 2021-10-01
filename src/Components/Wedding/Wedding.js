import React from "react";
import FAQ from "../FAQ/FAQ";
import styles from "./Wedding.module.css";
import * as invite from "/public/images/wedding_invite.jpg";

export default function Wedding() {
  return (
    <div className="content">
      <div className="begin panel">
        <a href="https://goo.gl/maps/1Thmcx4MnthezoiK8" className={styles.mapLink}>
          <img src={invite.default.src} className={styles.invite} />
        </a>
      </div>
      <div className="end panel">
        <FAQ />
      </div>
    </div>
  );
}
