import React from 'react';
import styles from './styles.module.scss';
import { formatDate } from '@/shared/helpers/formateDate';
import { Search } from '@/features/search';
import { ThemeButton } from '@/features/theme';

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className={`${styles.headerTop__date} white`}>{formatDate(new Date())}</div>
      <div className={styles.headerTop__right}>
        <ThemeButton />
        <Search />
      </div>
    </div>
  );
};

export default HeaderTop;
