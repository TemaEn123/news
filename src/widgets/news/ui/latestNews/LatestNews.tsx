import React from 'react';
import { useAppSelector } from '@/app/AppStore';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { selectFilters, selectNews } from '@/entities/news/model/newsSlice';
import styles from './styles.module.scss';
import NewsCard from '@/entities/news/ui/newsCard/NewsCard';
import Skeleton from '@/shared/ui/skeleton/Skeleton';

const LatestNews = () => {
  const filters = useAppSelector(selectFilters);

  const { error, isLoading } = useGetNewsQuery(filters);

  const news = useAppSelector(selectNews);

  if (isLoading) {
    return (
      <div className={styles.news}>
        <Skeleton type="latest" count={15} />
      </div>
    );
  }

  if (error) {
    return <div className={styles.news}>ERRORS</div>;
  }

  if (news.length) {
    return (
      <div className={styles.news}>
        {news.slice(0, 15).map((news, i) => (
          <NewsCard key={news.title + i} news={news} type="latest" />
        ))}
      </div>
    );
  }
};

export default LatestNews;
