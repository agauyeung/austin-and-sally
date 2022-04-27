import groups from "./PhotoGroupsText";
import React from "react";
import styles from "./PhotoGroups.module.css";

export default function PhotoGroups() {
  const render = (groups) => {
    return groups.map(({ name, description, time }, i) => (
      <div className={styles.groupWrapper} key={i}>
        <div className={styles.time}>{time}</div>
        <div className={styles.groupDetails}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <br />
      </div>
    ));
  };

  return (
    <div id="photogroups">
      <h2 className={`${styles["header"]} with-icon`}>Photo Groups</h2>
      <div className="panel-content">{render(groups)}</div>
    </div>
  );
}
