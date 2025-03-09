import React from 'react';
import { INews } from '../../model/interfaces';
import LatestNewsCard from '../latestNewsCard/LatestNewsCard';
import TopNewsCard from '../topNewsCard/TopNewsCard';
import { useAppDispatch } from '@/app/AppStore';
import { setCurrentNews } from '../../model/newsSlice';
import { useNavigate } from 'react-router-dom';
import { formatTitleToUrl } from '@/shared/helpers/formatTitleToUrl';
import SearchNewsCard from '../searchNewsCard/SearchNewsCard';

interface Props {
  news: INews;
  type: 'latest' | 'top' | 'search';
  handleSearchNewsClick?: () => void;
}

const NewsCard = ({ news, type, handleSearchNewsClick }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNewsClick = (news: INews): void => {
    if (type === 'search') {
      handleSearchNewsClick();
    }
    dispatch(setCurrentNews(news));
    const pathFromTitle = formatTitleToUrl(news.title);
    navigate(`/news/${pathFromTitle}`);
  };

  switch (type) {
    case 'latest':
      return <LatestNewsCard handleNewsClick={handleNewsClick} news={news} />;
    case 'top':
      return <TopNewsCard handleNewsClick={handleNewsClick} news={news} />;
    case 'search':
      return <SearchNewsCard handleNewsClick={handleNewsClick} news={news} />;
  }
};

export default NewsCard;
