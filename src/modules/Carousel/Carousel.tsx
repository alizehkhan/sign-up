import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./carousel.module.css";

const Carousel = () => {
  const items = [
    <img
      className={styles.item}
      src="/masonry-1.png"
      alt="Friends enjoying a meal together they split the cost of using Splitify"
    />,
    <div className={`${styles.item} ${styles.split}`} aria-label="Split it!">
      sp/it it!
    </div>,
    <div className={`${styles.item} ${styles.pattern}`} />,
    <img
      className={styles.item}
      src="/masonry-2.png"
      alt="Onboarding screen of Splitify's mobile app"
    />,
    <img
      className={styles.item}
      src="/masonry-3.png"
      alt="A Splitify debit card"
    />,
  ];

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
