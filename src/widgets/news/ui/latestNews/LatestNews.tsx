import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/app/AppStore';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { selectFilters, selectNews } from '@/entities/news/model/newsSlice';
import styles from './styles.module.scss';
import Skeleton from '@/shared/ui/skeleton/Skeleton';
import Error from '@/shared/ui/error/Error';
import { MAX_COUNT_OF_PAGES, PAGE_SIZE_LATEST } from '@/shared/constants';
import { Pagination } from '@/features/pagination';
import { useLocation } from 'react-router-dom';
import { NewsCard } from '@/entities';

const LatestNews = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const location = useLocation();

  useEffect(() => {
    setCurrentPage(1);
  }, [location.pathname]);

  const filters = useAppSelector(selectFilters);

  const { data, error, isFetching } = useGetNewsQuery({ ...filters, page: currentPage });

  const countOfPages: number =
    Math.ceil(data?.totalResults / PAGE_SIZE_LATEST) > MAX_COUNT_OF_PAGES
      ? MAX_COUNT_OF_PAGES
      : Math.ceil(data?.totalResults / PAGE_SIZE_LATEST);

  const news = useAppSelector(selectNews);

  const handlePrevPageClick = (): void => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPageClick = (): void => {
    if (currentPage < countOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (page: number): void => {
    setCurrentPage(page);
  };

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

  if (news.length) {
    return (
      <section className={styles.news}>
        {news.slice(0, 14).map((news, i) => (
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
