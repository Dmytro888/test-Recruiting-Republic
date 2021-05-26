import React from 'react';
import Container from '../Container/Container';
import featuresData from '../../db/feautures';
import { useDevice } from '../../hooks/useDevice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import './swiper.css';
import styles from './Features.module.css';

SwiperCore.use([Pagination]);

const Features = () => {
  const { isDesctopDevice } = useDevice();
  if (!isDesctopDevice) {
    return (
      <Container>
        <h2 className={styles.title}>Why our directory</h2>
        <Swiper spaceBetween={28} slidesPerView={1} pagination={true}>
          {featuresData.map(({ title, content, icon }) => (
            <SwiperSlide key={title}>
              <div className={styles.sliderItem}>
                <img className={styles.icon} src={icon} alt='icon' />
                <h3 className={styles.featuresTitle}>{title}</h3>
                <p className={styles.text}>{content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className={styles.featuresContainer}>
          <h2 className={styles.title}>Why our directory</h2>
          <ul className={styles.featuresList}>
            {featuresData.map(({ title, content, icon }) => (
              <li key={title} className={styles.featuresItem}>
                <div className={styles.iconContainer}>
                  <img className={styles.icon} src={icon} alt='icon' />
                </div>
                <h3 className={styles.featuresTitle}>{title}</h3>
                <p className={styles.text}>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    );
  }
};

export default Features;
