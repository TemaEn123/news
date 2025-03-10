import React, { memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  count: number;
  handlePrevPageClick: () => void;
  handleNextPageClick: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}

const Pagination = memo(
  ({ count, currentPage, handlePrevPageClick, handleNextPageClick, handlePageClick }: Props) => {
    return (
      <>
        {count && (
          <div className={styles.pagination}>
            <button disabled={currentPage === 1} onClick={handlePrevPageClick}>
              {'<'}
            </button>
            {[...Array(count)].map((_, i) => (
              <button
                disabled={currentPage === i + 1}
                onClick={() => handlePageClick(i + 1)}
                key={i}
              >
                {i + 1}
              </button>
            ))}
            <button disabled={currentPage === count} onClick={handleNextPageClick}>
              {'>'}
            </button>
          </div>
        )}
      </>
    );
  }
);

Pagination.displayName = 'Pagination';

export default React.memo(Pagination);
