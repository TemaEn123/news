import React from 'react';
import styles from './styles.module.scss';
import { getActualYear } from '@/shared/helpers/getActualYear';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__content} container white`}>
        © {getActualYear()} The Telegraph Company
      </div>
    </footer>
  );
};

export default Footer;
