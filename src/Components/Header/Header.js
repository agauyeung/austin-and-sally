import React, { useCallback, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const linksDef = [
  {
    id: "wedding",
    href: "/wedding",
    text: "Wedding",
    className: `${styles.wedding} with-icon`
  },
  {
    id: "story",
    href: "/story",
    text: "Our Story",
    className: `${styles.story} with-icon`
  }
];

function HeaderLink(props) {
  const aProps = { ...props };
  delete aProps.href;
  return (
    <Link href={props.href}>
      <a {...props}>{props.text}</a>
    </Link>
  );
}

function HeaderLinksWrapper() {
  const [selectedLink, setSelectedLink] = useState();
  const onClick = useCallback(
    ({ target }) => {
      setSelectedLink(target.dataset.id);
    },
    [setSelectedLink]
  );

  return (
    <>
      {linksDef.map(({ href, text, id, className }) => (
        <HeaderLink
          key={id}
          href={href}
          text={text}
          data-id={id}
          onClick={onClick}
          className={className}
          data-selected={id === selectedLink ? true : undefined}
        />
      ))}
    </>
  );
}

export default function Header({ id }) {
  return (
    <>
      <div id={id} className={styles.wrapper}>
        <h1>Austin & Sally</h1>
        <div className={styles["header-links-wrapper"]}>
          <div
            className={`link-wrapper ${styles["link-wrapper"]} ${styles["desktop-nav"]}`}
          >
            <HeaderLinksWrapper />
          </div>
          <span
            className={`material-icons-outlined ${styles["icon-link-wrapper"]}`}
          >
            <Link href="/gifting">
              <a
                className={styles["icon-link"]}
                aria-label="Gifting"
                title="Gifting"
              >
                redeem
              </a>
            </Link>
          </span>
          <span
            className={`material-icons-outlined ${styles["icon-link-wrapper"]}`}
          >
            <a
              className={styles["icon-link"]}
              href="mailto:austin.and.sally.2021@gmail.com"
              aria-label="Contact Us"
              title="Contact Us"
            >
              email
            </a>
          </span>
          <span className={`material-icons-outlined`}>
            <a
              className={styles["icon-link"]}
              href="https://goo.gl/maps/1Thmcx4MnthezoiK8"
              aria-label="Navigate"
              title="Navigate"
            >
              place
            </a>
          </span>
        </div>
      </div>
      <div className={`${styles.wrapper} ${styles["mobile-nav"]}`}>
        <HeaderLinksWrapper />
      </div>
    </>
  );
}
