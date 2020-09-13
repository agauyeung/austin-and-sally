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
    <div className={styles["wrapper"]}>
      <div className={`${styles["begin"]} panel`}>
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          dictum sit amet. Pharetra pharetra massa massa ultricies mi quis
          hendrerit dolor. Non pulvinar neque laoreet suspendisse interdum. Et
          netus et malesuada fames. Mauris a diam maecenas sed. Morbi tristique
          senectus et netus et. Risus nullam eget felis eget nunc lobortis
          mattis. Cum sociis natoque penatibus et magnis dis parturient. Aliquet
          enim tortor at auctor urna nunc id. Vel quam elementum pulvinar etiam
          non quam lacus suspendisse. Feugiat scelerisque varius morbi enim nunc
          faucibus a. At auctor urna nunc id. Tristique magna sit amet purus
          gravida quis. Vitae semper quis lectus nulla. Viverra vitae congue eu
          consequat ac felis donec et.
        </p>
      </div>
      <br />
      <div className={`${styles["end"]} panel ${styles["carousel-panel"]}`}>
        <ui5-carousel cyclic>
          {images.map((img) => (
            <img src={img} className={styles["img"]} alt="Austin and Sally" />
          ))}
        </ui5-carousel>
      </div>
    </div>
  );
}
