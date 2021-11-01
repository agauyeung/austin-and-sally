import React from "react";
import styles from "./Venmo.module.css";
import * as venmo from "/public/images/venmo_code.png";

export default function Venmo() {
  return (
    <div className="content">
      <div className={`panel ${styles["panel"]}`}>
        <img src={venmo.default.src} />
      </div>
    </div>
  );
}
