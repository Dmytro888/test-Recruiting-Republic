import React from 'react';
import styles from './Button.module.css';

const Button = ({ ...props }) => {
  return (
    <button {...props} className={styles.button}>
      Request info
    </button>
  );
};

export default Button;
