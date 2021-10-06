import React, { useCallback, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const linksDef = [
  {
    id: "wedding",
    href: "/wedding",
    text: "The Wedding"
  },
  {
    id: "story",
    href: "/story",
    text: "Our Story"
  }
];

export function HeaderLink(props) {
  const aProps = { ...props };
  delete aProps.href;
  return (
    <Link href={props.href}>
      <a {...props}>{props.text}</a>
    </Link>
  );
}

export default function Header({ id }) {
  const [selectedLink, setSelectedLink] = useState();
  const onClick = useCallback(
    ({ target }) => {
      setSelectedLink(target.dataset.id);
    },
    [setSelectedLink]
  );

  return (
    <div id={id} className={styles.wrapper}>
      <h1>Austin & Sally</h1>
      <div className={styles["header-links-wrapper"]}>
        <div className={`link-wrapper ${styles["link-wrapper"]}`}>
          {linksDef.map(({ href, text, id }) => (
            <HeaderLink
              key={id}
              href={href}
              text={text}
              data-id={id}
              onClick={onClick}
              selected={id === selectedLink}
            />
          ))}
        </div>
        <span className="material-icons-outlined">
          <a
            className={styles["mail-icon-link"]}
            href="mailto:austin.and.sally.2021@gmail.com"
            ariaLabel="Contact Us"
          >
            email
          </a>
        </span>
      </div>
    </div>
  );
}
