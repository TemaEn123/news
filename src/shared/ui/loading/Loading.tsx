import React, { memo } from 'react';
import { LoadingIcon } from '@/shared/assets';
import styles from './styles.module.scss';

interface Props {
  fontSize: number;
}

const Loading = memo(({ fontSize }: Props) => {
  return (
    <div className={styles.loading}>
      <LoadingIcon fontSize={fontSize} />
    </div>
  );
});

Loading.displayName = 'Loading';

export default React.memo(Loading);
