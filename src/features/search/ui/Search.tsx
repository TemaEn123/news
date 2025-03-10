import React, { useMemo, useRef, useState } from 'react';
import { SearchIcon } from '@/shared/assets';
import styles from './styles.module.scss';
import { useGetSearchNewsQuery } from '@/entities/news/api/newsApi';
import { useAppSelector } from '@/app/AppStore';
import { selectSearchNews } from '@/entities/news/model/newsSlice';
import { NewsCard } from '@/entities';
import { Loading } from '@/shared/ui';
import Error from '@/shared/ui/error/Error';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useSearch } from '@/shared/hooks/useSearch';

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [showItems, setShowItems] = useState<boolean>(false);

  const searchItemsRef = useRef();

  const debouncedSearch = useDebounce(search, 600);

  const skip = debouncedSearch ? false : true;

  const { isFetching, error } = useGetSearchNewsQuery(debouncedSearch, { skip });

  const news = useAppSelector(selectSearchNews);

  const [handleInputChange, handleInputFocus, handleSearchNewsClick] = useSearch(
    setSearch,
    setShowItems,
    search
  );

  useClickOutside(searchItemsRef, () => setShowItems(false), showItems);

  const filteredNews = useMemo(() => {
    return news.map((news, i) => (
      <NewsCard
        handleSearchNewsClick={handleSearchNewsClick}
        key={news.title + i}
        news={news}
        type="search"
      />
    ));
  }, [news, handleSearchNewsClick]);

  if (error) {
    console.log(error);
  }

  return (
    <div ref={searchItemsRef} className={styles.search}>
      <form>
        <SearchIcon fontSize={17} />
        <input
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleInputFocus}
          value={search}
          type="text"
          placeholder="Search"
        />
      </form>
      {showItems && (
        <div className={styles.search__items}>
          {isFetching || debouncedSearch === '' ? (
            <Loading fontSize={30} />
          ) : error ? (
            <Error />
          ) : !news.length ? (
            <p>Not found...</p>
          ) : (
            filteredNews
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
