import React, { memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  count: number;
  type: 'latest' | 'top' | 'article';
}

const Skeleton = memo(({ type, count }: Props) => {
  const skeletonType =
    type === 'latest'
      ? styles.skeleton_latest
      : type === 'top'
        ? styles.skeleton_top
        : styles.skeleton_article;

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div data-testid="skeleton" className={`${styles.skeleton} ${skeletonType}`} key={i}>
          <div data-testid="skeleton-inside" className={styles.skeleton__inside} />
        </div>
      ))}
    </>
  );
});

Skeleton.displayName = 'Skeleton';

export default React.memo(Skeleton);
