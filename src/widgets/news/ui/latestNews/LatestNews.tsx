import React, { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '@/app/AppStore';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { selectFilters, selectNews } from '@/entities/news/model/newsSlice';
import styles from './styles.module.scss';
import Skeleton from '@/shared/ui/skeleton/Skeleton';
import Error from '@/shared/ui/error/Error';
import { Pagination } from '@/features/pagination';
import { useLocation } from 'react-router-dom';
import { NewsCard } from '@/entities';
import { calculateCountOfPages } from '@/shared/helpers/calculateCountOfPages';
import { usePagination } from '@/shared/hooks/usePagination';

const LatestNews = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const location = useLocation();

  useEffect(() => {
    setCurrentPage(1);
  }, [location.pathname]);

  const filters = useAppSelector(selectFilters);

  const { data, error, isFetching } = useGetNewsQuery({ ...filters, page: currentPage });

  const countOfPages: number = useMemo(
    () => calculateCountOfPages(data?.totalResults),
    [data?.totalResults]
  );

  const news = useAppSelector(selectNews);

  const displayedNews = useMemo(() => news.slice(0, 14), [news]);

  const [handleNextPageClick, handlePageClick, handlePrevPageClick] = usePagination(
    currentPage,
    countOfPages,
    setCurrentPage
  );

  if (isFetching) {
    return (
      <div className={styles.news}>
        <Skeleton type="latest" count={15} />
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

  if (displayedNews.length) {
    return (
      <section className={styles.news}>
        {displayedNews.map((news, i) => (
          <NewsCard key={news.title + i} news={news} type="latest" />
        ))}
        <Pagination
          handlePageClick={handlePageClick}
          handleNextPageClick={handleNextPageClick}
          handlePrevPageClick={handlePrevPageClick}
          count={countOfPages}
          currentPage={currentPage}
        />
      </section>
    );
  }
};

export default LatestNews;
