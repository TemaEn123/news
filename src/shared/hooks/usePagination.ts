import { useCallback } from 'react';

export const usePagination = (
  currentPage: number,
  countOfPages: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
): [() => void, (page: number) => void, () => void] => {
  const handlePrevPageClick = useCallback((): void => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const handleNextPageClick = useCallback((): void => {
    if (currentPage < countOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, countOfPages]);

  const handlePageClick = useCallback((page: number): void => {
    setCurrentPage(page);
  }, []);

  return [handleNextPageClick, handlePageClick, handlePrevPageClick];
};
