import React, { useMemo } from 'react';
import { useAppSelector } from '@/app/AppStore';
import { useGetTopNewsQuery } from '@/entities/news/api/newsApi';
import { selectFilters, selectTopNews } from '@/entities/news/model/newsSlice';
import styles from './styles.module.scss';
import Skeleton from '@/shared/ui/skeleton/Skeleton';
import Error from '@/shared/ui/error/Error';
import { NewsCard } from '@/entities';

const TopNews = () => {
  const filters = useAppSelector(selectFilters);

  const { error, isFetching } = useGetTopNewsQuery(filters);

  const news = useAppSelector(selectTopNews);

  const displayedNews = useMemo(() => news.slice(0, 11), [news]);

  if (isFetching) {
    return (
      <div className={styles.news}>
        <div className={styles.news__wrap}>
          <Skeleton count={11} type="top" />
        </div>
      </div>
    );
  }

  if (error) {
    console.log(error);

    return (
      <div className={styles.news}>
        <Error />
      </div>
    );
  }

  if (news.length) {
    return (
      <section className={styles.news}>
        <div className={styles.news__wrap}>
          {displayedNews.map((news, i) => (
            <NewsCard key={news.title + i} news={news} type="top" />
          ))}
        </div>
      </section>
    );
  }
};

export default TopNews;
