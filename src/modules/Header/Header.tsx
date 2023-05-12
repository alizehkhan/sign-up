import React from "react";

import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <img src="/logo.svg" alt="Splitify logo" />
  </header>
);

export default Header;
