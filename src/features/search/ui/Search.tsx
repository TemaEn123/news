import React, { useRef, useState } from 'react';
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

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [showItems, setShowItems] = useState<boolean>(false);

  const searchItemsRef = useRef();

  const debouncedSearch = useDebounce(search, 600);

  const skip = debouncedSearch ? false : true;

  const { isFetching, error } = useGetSearchNewsQuery(debouncedSearch, { skip });

  const news = useAppSelector(selectSearchNews);

  const handleInputChange = (value: string): void => {
    setSearch(value);
    if (value) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  };

  const handleInputFocus = () => {
    if (search) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  };

  const handleSearchNewsClick = () => {
    setShowItems(false);
    setSearch('');
  };

  useClickOutside(searchItemsRef, () => setShowItems(false), showItems);

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
            news.map((news, i) => (
              <NewsCard
                handleSearchNewsClick={handleSearchNewsClick}
                key={news.title + i}
                news={news}
                type="search"
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
