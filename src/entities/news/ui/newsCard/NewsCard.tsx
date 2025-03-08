import React from 'react';
import { INews } from '../../model/interfaces';
import LatestNewsCard from '../latestNewsCard/LatestNewsCard';
import TopNewsCard from '../topNewsCard/TopNewsCard';

interface Props {
  news: INews;
  type: 'latest' | 'top';
}

const NewsCard = ({ news, type }: Props) => {
  return type === 'latest' ? <LatestNewsCard news={news} /> : <TopNewsCard news={news} />;
};

export default NewsCard;
