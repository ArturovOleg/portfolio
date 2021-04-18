import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";

const Header = (props) => {
  const { headerItems, logo } = props;

  return (
    <header className={styles.header}>
      <div className={`${styles.container} d-f jc-sb ai-c`}>
        <div className={styles.logo}>
          <img src={logo} alt="LOGO" />
        </div>

        <nav className={styles.nav}>
          {headerItems.map((item, index) => (
            <a
              key={`${index}_headerItem_${item.label}`}
              className={styles.navItm}
              href="#"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
