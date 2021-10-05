import React from "react";
import styles from "./ImagePreviewStrip.module.css";

export default function ImagePreviewStrip({ headerText, images }) {
  return (
    <div className="panel">
      <h2>{headerText}</h2>
      <div className={styles.imagePreviewStrip}>
        {images.map(({ default: { src } }, index) => (
          <div className={styles.imageContainer}>
            <img
              src={src}
              key={index}
              className={styles["img"]}
              alt="Austin and Sally"
            />
          </div>
        ))}
        <div className={styles.seeAllContainer}>
          <a className={styles.seeAll}>See All</a>
        </div>
      </div>

      <div className={styles["photo-credit"]}>
        Photo Credit:&nbsp;
        <a href="https://crystalmak.myportfolio.com">Crystal Mak</a>
      </div>
    </div>
  );
}
