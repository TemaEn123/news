import React, { memo } from 'react';
import styles from './styles.module.scss';
import { INews } from '../../model/interfaces';
import { formatTimeSincePublication } from '@/shared/helpers/formatTimeSincePublication';
import { Image } from '@/shared/ui';

interface Props {
  news: INews;
  handleNewsClick: (news: INews) => void;
}

const LatestNewsCard = memo(({ news, handleNewsClick }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__img} onClick={() => handleNewsClick(news)}>
        <Image src={news.urlToImage} alt={news.title} />
      </div>
      <div className={styles.card__info}>
        <h2 onClick={() => handleNewsClick(news)}>{news.title}</h2>
        <p className={`${styles.card__description} white`}>{news.description}</p>
        <p className={`${styles.card__about} white`}>
          <span>{news.source.name}</span>
          <span>/</span>
          <span>{news.author}</span>
          <span>/</span>
          <span>{formatTimeSincePublication(news.publishedAt)}</span>
        </p>
      </div>
    </article>
  );
});

LatestNewsCard.displayName = 'LatestNewsCard';

export default React.memo(LatestNewsCard);
