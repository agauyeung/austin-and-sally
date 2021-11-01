import React from "react";
import styles from "./Zelle.module.css";
import * as zelle from "/public/images/zelle_code.jpg";

export default function Zelle() {
  return (
    <div className="content">
      <div className={`panel ${styles["panel"]}`}>
        <img src={zelle.default.src} />
      </div>
    </div>
  );
}
