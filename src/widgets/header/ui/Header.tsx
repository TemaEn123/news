import React from 'react';
import styles from './styles.module.scss';
import HeaderTop from './headerTop/HeaderTop';
import HeaderCenter from './headerCenter/HeaderCenter';
import { Menu } from '@/features/menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__content} container`}>
        <HeaderTop />
        <HeaderCenter />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
