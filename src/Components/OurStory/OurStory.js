import React from "react";
import ImagePreviewStrip from "../ImagePreviewStrip/ImagePreviewStrip";
import styles from "./OurStory.module.css";
import * as austin from "/public/images/austin.jpg";
import * as sally from "/public/images/sally.jpg";
import * as eng1 from "/public/images/eng1.jpg";
import * as eng2 from "/public/images/eng2.jpg";
import * as eng3 from "/public/images/eng3.jpeg";
import * as pw1 from "/public/images/pw1.jpg";
import * as pw2 from "/public/images/pw2.jpg";
import * as pw3 from "/public/images/pw3.jpg";

const engagementImages = [eng1, eng2, eng3];
const preWeddingImages = [pw1, pw2, pw3];

export default function OurStory() {
  return (
    <div className={`content ${styles["content"]}`}>
      <div className="panel">
        <h2 className={`${styles["our-story-header"]} with-icon`}>Our Story</h2>
        <div className={styles.columns}>
          <div className={styles["story-content"]}>
            <img src={austin.default.src} className={styles.profile} />
            <h3>Austin's Side of the Story</h3>

            <div className="panel-content">
              <p>
                I first met Sally at our church on a fellowship night and
                quickly became friends. One night, she was driving me home from
                fellowship, and we were having a great conversation. I remember
                feeling very comfortable around her, and I was glad that we
                connected on a deeper level than just surface-level chatting. At
                this point, I was pretty intrigued.
                <br />
                <br />
                We started meeting up together on dates, and as I got to know
                her better, I realized that I didn’t just like her; I really
                liked her. It wasn’t just that she was beautiful, she was a very
                hard worker, really smart, and a very kind and understanding
                person. I was really hoping she liked me too, and there were
                definitely hints, but of course, it’s never a 100% certainty
                unless you ask…
                <br />
                <br />
                Six months and several dates later, we had planned on a movie
                date to watch a very unromantic <i>Deep Water Horizon</i>.
                Unfortunalely, it was that or a biopic; there just weren't that
                many options. The morning of, my dad was driving me home after
                kung fu, and I told him that I felt like I wanted to take this
                relationship to the next step. He encouraged me, which I was
                grateful for, but reality set in that I knew I was going to ask
                today. From then I started feeling nervous.
                <br />
                <br />
                The whole time during the movie, I kept feeling a deep pang in
                my stomach, which was of course the nervousness, and as the
                movie started to end, I couldn’t help but feel increasingly
                nervous. We walked out of the theater onto the little “bridge”
                that overlooked the Tanforan food court, and I stopped us there.
                I kept trying to get the words out of my mouth, but every time
                they just wouldn’t come out. I took deep breaths, and Sally
                noticed and expressed concern. I was kicking myself inside, and
                finally got the words out of my mouth. I told her how I felt
                about her, and that over the past few dates we had, I had
                noticed more and more how beautiful of a person she was, inside
                and out. then I finally asked if she would be my girlfriend.
                <br />
                <br />
                She told me she needed some time to think about it, so we headed
                to dinner. After a few hours of deliberation over yummy noodles
                while I poured sweat, she agreed! Throughout the following
                years, we grew to know each other better and better. We grew as
                individuals and we grew as a couple.
                <br />
                <br />
                3 years later...
                <br />
                <br />
                I started planning for a marriage proposal. I had everything
                planned out and was about to put in a deposit with the site when
                the coronavirus pandemic hit and the entire state shut down.
                Plans had to be halted temporarily and changed. It took a few
                more months for me to finalize the details for the modified
                proposal and set the plan into motion.
                <br />
                <br />
                On July 18th, 2020, Sally said "Yes"! We are now in the process
                of planning for our wedding!
              </p>
            </div>
          </div>

          <div className={styles["story-content"]}>
            <img src={sally.default.src} className={styles.profile} />
            <h3>Sally's Side of the Story</h3>

            <div className="panel-content">
              <p>
                When I first met Austin at church, I was introduced to everyone.
                I remember being very confused on why Austin and his brother
                both had the same name. It wasn't until I looked up Austin on
                Facebook that I realized they actually had different names. (I
                didn’t add him though)
                <br />
                <br />
                One night after fellowship, we realized that we actually lived
                really close to each other. Austin hadn’t driven that day, so I
                drove him home. On the way, we chatted a lot and had a very
                meaningful conversation.
                <br />
                <br />
                After that, we started to message each other, often just about
                silly things.
                <br />
                <br />
                The first time Austin asked me out, it was to come over to watch
                Star Wars with Artin. I don’t consider that our first date
                though, because Artin was there. I think Austin was nervous
                because he didn’t sit next to me. I had the whole couch to
                myself while Artin sat in the back at the kitchen counter. When
                the screen went black and the Star Wars title boomed on the
                screen, I saw Artin in the reflection gesturing to Austin to sit
                next to me, and I knew something was up.
                <br />
                <br />
                Austin finally asked me out alone, and we started going on real
                dates.
                <br />
                <br />
                On one of our dates, we decided to go to a theater to watch{" "}
                <i>Deep Water Horizon</i>, a disaster movie. I don’t like
                disaster movies because they tend to have a lot of people dying.
                We finished the movie, and I was right: it was too intense for
                me. As we were walking out of the theater, I noticed Austin was
                very silent. I thought he must have been too affected by the
                movie and asked if he was okay.
                <br />
                <br />
                Then he said something I wasn’t expecting, and the atmosphere
                went from depressing to something totally different. He told me
                that he really liked me and why, and that he wanted to be able
                to get to know me more on another level.
                <br />
                <br />
                He asked me to be his girlfriend.
                <br />
                <br />
                I needed some time to digest what he had said (especially after
                a disaster movie), but that night, as he pulled into the
                driveway to drop me home, I decided to give this relationship a
                try.
                <br />
                <br />
                The more I got to know him, the more I found that he was very
                special to me.
                <br />
                <br />
                And that’s how we ended up here, getting ready for a wedding.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="panel">
        <ImagePreviewStrip
          headerText="Engagement"
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
