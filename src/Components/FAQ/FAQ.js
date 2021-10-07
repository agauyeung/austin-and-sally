import faqs from "./FAQ.json";
import React from "react";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const renderQA = (faqs) => {
    return faqs.map(({ question, answer }) => {
      return (
        <>
          <h3>{question}</h3>
          <br />
          <p className={styles.answer}>{answer}</p>
        </>
      );
    });
  };

  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <p className="panel-content">{renderQA(faqs)}</p>
    </>
  );
}
