import React from 'react';
import styles from './styles.module.scss';

interface Props {
  count: number;
  type: 'latest' | 'top';
}

const Skeleton = ({ type, count }: Props) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          className={`${styles.skeleton} ${type === 'latest' ? styles.skeleton_latest : styles.skeleton_top}`}
          key={i}
        >
          <div className={styles.skeleton__inside} />
        </div>
      ))}
    </>
  );
};

export default Skeleton;
