import React from "react";
import styles from "./ImagePreviewStrip.module.css";

export default function ImagePreviewStrip({
  headerText,
  images,
  seeAllLink,
  photographer,
  photographerWebsite
}) {
  return (
    <>
      <h2 className={`${styles.header} with-icon`}>{headerText}</h2>
      <div
        className={styles["image-preview-strip"]}
        style={{ gridTemplateColumns: `repeat(${images.length + 1}, 1fr)` }}
      >
        {images.map(({ default: { src } }, i) => (
          <div key={i} className={styles["image-container"]}>
            <img src={src} className={styles["img"]} alt="Austin and Sally" />
          </div>
        ))}
        <a href={seeAllLink} className={styles["see-all-link"]}>
          See All
        </a>
      </div>

      <div className={styles["photo-credit"]}>
        Photo Credit:&nbsp;
        <a href={photographerWebsite}>{photographer}</a>
      </div>
    </>
  );
}
