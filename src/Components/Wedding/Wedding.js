import React from "react";
import styles from "./Wedding.module.css";
/* import * as drawing from "../../images/drawing.jpeg"; */
import * as bridges from "/public/images/bridges_golf_club.jpg";

export default function Wedding() {
  return (
    <div className="content">
      <div className={`panel ${styles["panel"]}`}>
        <h2>When and Where</h2>
        <img className={styles["bridges"]} src={bridges.default.src} alt="Golf Club"/>
        <p>
          05.01.2022
          <br />
          <a href="https://goo.gl/maps/1Thmcx4MnthezoiK8">The Bridges Golf Club, San Ramon</a>
        </p>
        {/* <img className={styles["drawing"]} src={drawing} alt="drawing"/> */}
      </div>
    </div>
  );
}