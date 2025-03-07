import React from 'react';
import { LoadingIcon } from '@/shared/assets';
import styles from './styles.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <LoadingIcon fontSize={50} />
    </div>
  );
};

export default Loading;
