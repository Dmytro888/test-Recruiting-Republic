import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.text}>©2020 Icaria Health. All rights reserved.</p>
    </div>
  );
};

export default Footer;
