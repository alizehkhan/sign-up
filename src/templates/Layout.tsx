import React, { ReactNode } from "react";
import { Container } from "@design-system";
import { useMediaQuery } from "react-responsive";

import { Carousel, Footer, Header, Masonry } from "../modules";

import styles from "./layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <Container>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
          {isTabletOrDesktop ? <Masonry /> : <Carousel />}
        </main>
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
