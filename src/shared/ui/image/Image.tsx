import React from 'react';
import styles from './styles.module.scss';

interface Props {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: Props) => {
  return <img className={styles.image} src={src} alt={alt} />;
};

export default Image;
