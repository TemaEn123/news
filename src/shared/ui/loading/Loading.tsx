import React from 'react';
import { LoadingIcon } from '@/shared/assets';
import styles from './styles.module.scss';

interface Props {
  fontSize: number;
}

const Loading = ({ fontSize }: Props) => {
  return (
    <div className={styles.loading}>
      <LoadingIcon fontSize={fontSize} />
    </div>
  );
};

export default Loading;
