import React from "react";
import ImagePreviewStrip from "../ImagePreviewStrip/ImagePreviewStrip";
import styles from "./OurStory.module.css";
import * as eng1 from "/public/images/eng1.jpeg";
import * as eng2 from "/public/images/eng2.jpeg";
import * as eng3 from "/public/images/eng3.jpeg";
import * as eng4 from "/public/images/eng4.jpeg";
import * as pw1 from "/public/images/pw1.jpg";
import * as pw2 from "/public/images/pw2.jpg";
import * as pw3 from "/public/images/pw3.jpg";

const engagementImages = [eng1, eng2, eng3, eng4];
const preWeddingImages = [pw1, pw2, pw3];

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
      <div className="panel">
        <ImagePreviewStrip
          headerText="Engagement Photoshoot"
          images={engagementImages}
          seeAllLink="https://photos.app.goo.gl/QSgNnxF53hyLCa2U8"
          photographer="Crystal Mak"
          photographerWebsite="https://www.instagram.com/crystalightscape/"
        />
      </div>
      <br />
      <div className="panel">
        <ImagePreviewStrip
          headerText="Pre-Wedding Photoshoot"
          images={preWeddingImages}
          seeAllLink="https://photos.app.goo.gl/P5aMprTZ5jVQnr666"
          photographer="Chris Chu"
          photographerWebsite="https://www.chrischuphoto.com/"
        />
      </div>
    </div>
  );
}
