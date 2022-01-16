import Link from "next/link";
import React from "react";
import styles from "./Gifting.module.css";

export default function Gifting() {
  return (
    <div className="content">
      <div className={`panel ${styles["panel"]}`}>
        <h2 className={`${styles.header} with-icon`}>Gifting</h2>
        <div className="panel-content">
          <p>
            Your presence at the wedding is more important to us than presents!
            <br />
            However, if you would like to give a gift, cash gifts would be
            greatly appreciated towards our home and honeymoon fund.
            <br />
            <br />
            For your convenience, we have provided the following links below:
            <br />
            <br />
            <div className={styles["gift-wrapper"]}>
              <a
                className={`button ${styles["gift-button"]} ${styles.paypal}`}
                href="https://www.paypal.me/austinandsally"
              ></a>
              <Link href="/venmo">
                <a
                  className={`button ${styles["gift-button"]} ${styles.venmo}`}
                ></a>
              </Link>
              <Link href="/zelle">
                <a
                  className={`button ${styles["gift-button"]} ${styles.zelle}`}
                ></a>
              </Link>
            </div>
            <br />
            <br />
            Alternatively, if you would like to contribute towards a physical
            gift, we have a wedding registry at{" "}
            <a href="https://www.zola.com/registry/sallyandaustin2022">
              https://www.zola.com/registry/sallyandaustin2022
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
