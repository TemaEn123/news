import React from 'react';
import styles from './styles.module.scss';
import TopNews from './topNews/TopNews';
import LatestNews from './latestNews/LatestNews';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@/app/AppStore';
import { isCategory } from '@/shared/helpers/isCategory';
import { setFilters } from '@/entities/news/model/newsSlice';

const News = () => {
  const params = useParams();

  const dispatch = useAppDispatch();

  if (!params.cat) {
    dispatch(setFilters(['q', 'in']));
    dispatch(setFilters(['category', null]));
  } else if (isCategory(params.cat)) {
    dispatch(setFilters(['q', params.cat]));
    dispatch(setFilters(['category', params.cat]));
  } else {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={styles.news}>
      <TopNews />
      <LatestNews />
    </div>
  );
};

export default News;
