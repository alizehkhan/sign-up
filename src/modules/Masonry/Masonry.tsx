import React from "react";

import styles from "./masonry.module.css";

const Masonry = () => {
  const columnOneItems = [
    <div className={styles.pattern} />,
    <img
      src="/masonry-1.png"
      alt="Friends enjoying a meal together they split the cost of using Splitify"
    />,
    <div className={styles.split} aria-label="Split it!">
      sp/it it!
    </div>,
  ];

  const columnTwoItems = [
    <img
      src="/masonry-2.png"
      alt="Onboarding screen of Splitify's mobile app"
    />,
    <img src="/masonry-3.png" alt="A Splitify debit card" />,
  ];

  return (
    <div className={styles.masonry}>
      <div className={styles.column}>
        {columnOneItems.map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.column}>
        {columnTwoItems.map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
