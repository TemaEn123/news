import React from 'react';
import styles from './styles.module.scss';

interface Props {
  count: number;
  type: 'latest' | 'top' | 'article';
}

const Skeleton = ({ type, count }: Props) => {
  const skeletonType =
    type === 'latest'
      ? styles.skeleton_latest
      : type === 'top'
        ? styles.skeleton_top
        : styles.skeleton_article;

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div className={`${styles.skeleton} ${skeletonType}`} key={i}>
          <div className={styles.skeleton__inside} />
        </div>
      ))}
    </>
  );
};

export default Skeleton;
