import "@ui5/webcomponents/dist/Carousel";
import React from "react";
import styles from "./Home.module.css";
import * as img1 from "../../images/image_1.jpeg";
import * as img2 from "../../images/image_2.jpeg";
import * as img3 from "../../images/image_3.jpeg";
import * as img4 from "../../images/image_4.jpeg";
import * as img5 from "../../images/image_5.jpeg";
import * as img6 from "../../images/image_6.jpeg";
import * as img7 from "../../images/image_7.jpeg";
import * as img8 from "../../images/image_8.jpeg";

const images = [img8, img1, img2, img3, img4, img5, img6, img7];

export default function Home() {
  return (
    <div className={`content ${styles["content"]}`}>
      <div className={`${styles["begin"]} panel`}>
        <h2>Our Story</h2>
        <p>
          We first met at our church on a fellowship night and quickly became
          friends. Several dates later, after about 6 months of getting to know
          each other, we went on a movie date to watch a very unromantic{" "}
          <i>Deep Water Horizon</i>. Austin asked Sally to be his girlfriend
          after the movie, and after a few hours of deliberation over yummy
          noodles while Austin poured sweat, she agreed! Throughout the
          following years, we grew to know each other better and better. We grew
          as individuals and we grew as a couple.
          <br />
          <br />
          3 years later...
          <br />
          <br />
          Austin began planning for the marriage proposal. He had everything
          planned out and was about to put in a deposit when the coronavirus
          pandemic hit and the entire state shut down. Plans had to be halted
          temporarily and changed. It took a few more months for Austin to
          finalize the details for the modified proposal and set the plan into
          motion.
          <br />
          <br />
          On July 18th, 2020, Sally said "Yes"! We are now in the process of
          planning for our wedding!
        </p>
      </div>
      <br />
      <div className={`${styles["end"]} panel ${styles["carousel-panel"]}`}>
        <ui5-carousel cyclic>
          {images.map((img) => (
            <img src={img} className={styles["img"]} alt="Austin and Sally" />
          ))}
        </ui5-carousel>
        <div className={styles["photo-credit"]}>
          Photo Credit:&nbsp;
          <a href="https://crystalmak.myportfolio.com">Crystal Mak</a>
        </div>
      </div>
    </div>
  );
}
