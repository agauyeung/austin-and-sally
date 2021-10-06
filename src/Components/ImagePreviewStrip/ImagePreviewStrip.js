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
      <h2>{headerText}</h2>
      <div
        className={styles["image-preview-strip"]}
        style={{ gridTemplateColumns: `repeat(${images.length + 1}, 1fr)` }}
      >
        {images.map(({ default: { src } }, index) => (
          <div className={styles["image-container"]}>
            <img
              src={src}
              key={index}
              className={styles["img"]}
              alt="Austin and Sally"
            />
          </div>
        ))}
        <div className={`link-wrapper ${styles["see-all-container"]}`}>
          <a href={seeAllLink}>See All</a>
        </div>
      </div>

      <div className={styles["photo-credit"]}>
        Photo Credit:&nbsp;
        <a href={photographerWebsite}>{photographer}</a>
      </div>
    </>
  );
}
