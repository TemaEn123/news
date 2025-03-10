import React, { memo } from 'react';
import { LoadingIcon } from '@/shared/assets';
import styles from './styles.module.scss';

interface Props {
  fontSize: number;
  modif?: 'dark';
}

const Loading = memo(({ fontSize, modif }: Props) => {
  return (
    <div className={styles.loading}>
      <LoadingIcon className={modif ? modif : null} fontSize={fontSize} />
    </div>
  );
});

Loading.displayName = 'Loading';

export default React.memo(Loading);
