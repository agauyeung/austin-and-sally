import React from "react";
import styles from "./Wedding.module.css";
import * as drawing from "../../images/drawing.jpeg";

export default function Wedding() {
  return (
    <div className="content">
      <div className={`panel ${styles["panel"]}`}>
        <h2>When and Where</h2>
        <img className={styles["drawing"]} src={drawing} alt="drawing"/>
        <p>
          05.23.2021
          <br />
          San Ramon
        </p>
      </div>
    </div>
  );
}
