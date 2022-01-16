import faqs from "./FAQText";
import React from "react";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const renderQA = (faqs) => {
    return faqs.map(({ question, answer }, i) => {
      return (
        <div key={i}>
          <h3>{question}</h3>
          <br />
          <p className={styles.answer}>{answer}</p>
        </div>
      );
    });
  };

  return (
    <>
      <h2 className={`${styles["faq-header"]} with-icon`}>Frequently Asked Questions</h2>
      <div className="panel-content">{renderQA(faqs)}</div>
    </>
  );
}
