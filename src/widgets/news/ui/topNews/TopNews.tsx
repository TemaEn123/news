import React from 'react';
import { useAppSelector } from '@/app/AppStore';
import { useGetTopNewsQuery } from '@/entities/news/api/newsApi';
import { selectFilters, selectTopNews } from '@/entities/news/model/newsSlice';
import styles from './styles.module.scss';
import NewsCard from '@/entities/news/ui/newsCard/NewsCard';
import Skeleton from '@/shared/ui/skeleton/Skeleton';

const TopNews = () => {
  const filters = useAppSelector(selectFilters);

  const { error, isLoading } = useGetTopNewsQuery(filters);

  const news = useAppSelector(selectTopNews);

  if (isLoading) {
    return (
      <div className={styles.news}>
        <div className={styles.news__wrap}>
          <Skeleton count={11} type="top" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className={styles.news}>ERRORS</div>;
  }

  if (news.length) {
    return (
      <div className={styles.news}>
        <div className={styles.news__wrap}>
          {news.slice(0, 11).map((news, i) => (
            <NewsCard key={news.title + i} news={news} type="top" />
          ))}
        </div>
      </div>
    );
  }
};

export default TopNews;
