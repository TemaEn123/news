import React, { useState } from 'react';
import { SearchIcon } from '@/shared/assets';
import styles from './styles.module.scss';

const Search = () => {
  const [search, setSearch] = useState<string>('');

  const handleInputChange = (value: string): void => {
    setSearch(value);
  };

  return (
    <div className={styles.search}>
      <form>
        <SearchIcon fontSize={17} />
        <input
          onChange={(e) => handleInputChange(e.target.value)}
          value={search}
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default Search;
