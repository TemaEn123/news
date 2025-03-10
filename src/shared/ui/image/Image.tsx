import React, { memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  src: string;
  alt: string;
}

const Image = memo(({ src, alt }: Props) => {
  return <img className={styles.image} src={src} alt={alt} />;
});

Image.displayName = 'Image';

export default React.memo(Image);
