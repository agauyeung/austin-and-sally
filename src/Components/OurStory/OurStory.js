import React from "react";
import ImagePreviewStrip from "../ImagePreviewStrip/ImagePreviewStrip";
import styles from "./OurStory.module.css";
import * as img1 from "/public/images/image_1.jpeg";
import * as img2 from "/public/images/image_2.jpeg";
import * as img3 from "/public/images/image_3.jpeg";
import * as img4 from "/public/images/image_4.jpeg";
import * as img5 from "/public/images/image_5.jpeg";
import * as img6 from "/public/images/image_6.jpeg";
import * as img7 from "/public/images/image_7.jpeg";
import * as img8 from "/public/images/image_8.jpeg";

const images = [img8, img1, img2, img3];
const images2 = [img4, img5, img6, img7];

export default function OurStory() {
  return (
    <div className={`content ${styles["content"]}`}>
      <div className="panel">
        <h2>Our Story</h2>
        <div className="panel-content">
          <p>
            We first met at our church on a fellowship night and quickly became
            friends. Six months and several dates later, we went on a movie date
            to watch a very unromantic <i>Deep Water Horizon</i>. Austin asked
            Sally to be his girlfriend after the movie, and after a few hours of
            deliberation over yummy noodles while Austin poured sweat, she
            agreed! Throughout the following years, we grew to know each other
            better and better. We grew as individuals and we grew as a couple.
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
      </div>
      <br />
      <ImagePreviewStrip headerText="Engagement Photoshoot" images={images} />
      <br />
      <ImagePreviewStrip headerText="Pre-Wedding Photoshoot" images={images2} />
    </div>
  );
}
