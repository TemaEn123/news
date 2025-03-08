import React from 'react';
import styles from './styles.module.scss';
import TopNews from './topNews/TopNews';
import LatestNews from './latestNews/LatestNews';

const News = () => {
  return (
    <section className={styles.news}>
      <TopNews />
      <LatestNews />
    </section>
  );
};

export default News;
