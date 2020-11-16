import React from "react";
import styles from "./Header.module.css";

export default function Header({ id }) {
  return (
    <div id={id} className={styles.wrapper}>
      <h1>Austin & Sally</h1>
      <div className={styles["link-wrapper"]}>
        <a href="/">Our Story</a>
        <a href="/engagement">The Engagement</a>
        <a href="/wedding">The Wedding</a>
        <a href="mailto:austin.and.sally.2021@gmail.com">Contact Us</a>
      </div>
    </div>
  );
}
