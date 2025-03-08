import React from 'react';
import { INews } from '../../model/interfaces';
import styles from './styles.module.scss';
import { Image } from '@/shared/ui';
import { formatTimeSincePublication } from '@/shared/helpers/formatTimeSincePublication';

interface Props {
  news: INews;
}

const TopNewsCard = ({ news }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Image src={news.urlToImage} alt={news.title} />
      </div>
      <div className={styles.card__info}>
        <h2>{news.title}</h2>
        <p className={styles.card__description}>{news.description}</p>
        <p className={styles.card__about}>
          <span>{news.source.name}</span>
          <span>/</span>
          <span>{news.author}</span>
          <span>/</span>
          <span>{formatTimeSincePublication(news.publishedAt)}</span>
        </p>
      </div>
    </div>
  );
};

export default TopNewsCard;
