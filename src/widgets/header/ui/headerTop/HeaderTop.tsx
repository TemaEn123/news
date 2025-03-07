import React from 'react';
import styles from './styles.module.scss';
import { formatDate } from '@/shared/helpers/formateDate';
import { Search } from '@/features/search';

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTop__date}>{formatDate(new Date())}</div>
      <Search />
    </div>
  );
};

export default HeaderTop;
