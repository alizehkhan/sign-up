import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@design-system";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <Container>
      <footer className={styles.footer}>
        <Link to="/terms">Terms</Link>
        <div aria-hidden={true} className={styles.separator}>
          ·
        </div>
        <Link to="/privacy">Privacy</Link>
        <div aria-hidden={true} className={styles.separator}>
          ·
        </div>
        <p>© 2023 Splitify. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default Footer;
