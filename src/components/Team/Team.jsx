import { useState, useEffect } from 'react';
import Container from '../Container/Container';
import teamData from '../../db/team';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import { useDevice } from '../../hooks/useDevice';

import styles from './Team.module.css';

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const Team = () => {
  const { isMobileDevice, isDesctopDevice } = useDevice();
  const [slidesPerView, setSlides] = useState(Number);

  useEffect(() => {
    if (isMobileDevice) {
      setSlides(2);
      return;
    }
    if (isDesctopDevice) {
      setSlides(6);
      return;
    } else {
      setSlides(2);
    }
  }, [isMobileDevice, isDesctopDevice]);

  return (
    <Container>
      <h2 className={styles.title}>Choose your profession for more details</h2>
      <Swiper
        spaceBetween={3}
        slidesPerView={slidesPerView}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        className='mySwiper'
      >
        {teamData.map(({ img, position }) => (
          <SwiperSlide key={position}>
            <div className={styles.content}>
              <img className={styles.contentImg} src={img} alt='img' />
              <h3 className={styles.positionName}>{position}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Team;
