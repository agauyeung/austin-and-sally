import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <h1>Austin & Sally</h1>
      <div className={styles["link-wrapper"]}>
        <a href="/">Our Story</a>
        <a href="/when-and-where">When & Where</a>
        <a href="mailto:test@test.com">Contact Us</a>
      </div>
    </div>
  );
}
