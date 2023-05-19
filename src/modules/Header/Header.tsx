import React from "react";
import { Container } from "@design-system";

import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <Container>
      <img src="/assets/logo.svg" alt="Splitify logo" />
    </Container>
  </header>
);

export default Header;
