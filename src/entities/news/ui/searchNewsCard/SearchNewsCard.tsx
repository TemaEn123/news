import React, { memo } from 'react';
import { INews } from '../../model/interfaces';
import styles from './styles.module.scss';
import { Image } from '@/shared/ui';

interface Props {
  news: INews;
  handleNewsClick: (news: INews) => void;
}

const SearchNewsCard = memo(({ news, handleNewsClick }: Props) => {
  return (
    <article className={styles.news} onClick={() => handleNewsClick(news)}>
      <div className={styles.news__img}>
        <Image src={news.urlToImage} alt={news.title} />
      </div>
      <div className={styles.news__info}>
        <h3>{news.title}</h3>
      </div>
    </article>
  );
});

SearchNewsCard.displayName = 'SearchNewsCard';

export default React.memo(SearchNewsCard);
