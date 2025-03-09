import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { Image } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/AppStore';
import { selectCurrentNews, setCurrentNews } from '../../model/newsSlice';
import Skeleton from '@/shared/ui/skeleton/Skeleton';
import { useGetCurrentNewsQuery } from '../../api/newsApi';
import { Navigate, useParams } from 'react-router-dom';
import Error from '@/shared/ui/error/Error';

const Article = () => {
  const news = useAppSelector(selectCurrentNews);
  const skip = news ? true : false;
  const params = useParams();
  const dispatch = useAppDispatch();

  const { data: loadingNews, isLoading, error } = useGetCurrentNewsQuery(params.id, { skip });

  useEffect(() => {
    if (!news && !isLoading && !error && loadingNews) {
      dispatch(setCurrentNews(loadingNews.articles[0]));
    }
  }, [news, loadingNews, isLoading, error, dispatch]);

  if (!loadingNews?.articles.length && !error && !isLoading && !news) {
    return <Navigate to="/404" replace />;
  }

  if (error) {
    console.log(error);

    return (
      <div className={styles.article}>
        <Error />
      </div>
    );
  }

  return (
    <>
      {news ? (
        <article className={styles.article}>
          <h1>{news.title}</h1>
          <div className={styles.article__content}>
            <div className={styles.article__img}>
              <Image src={news.urlToImage} alt={news.title} />
            </div>
            <div className={styles.article__info}>
              <p>{news.content}</p>
              <a target="_blank" rel="noreferrer" href={news.url}>
                Read more...
              </a>
            </div>
          </div>
        </article>
      ) : (
        <Skeleton count={1} type="article" />
      )}
    </>
  );
};

export default Article;
