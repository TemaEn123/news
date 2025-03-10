import { MAX_COUNT_OF_PAGES, PAGE_SIZE_LATEST } from '../constants';

export const calculateCountOfPages = (totalResults: number | undefined): number => {
  if (!totalResults) {
    return 0;
  }

  return Math.ceil(totalResults / PAGE_SIZE_LATEST) > MAX_COUNT_OF_PAGES
    ? MAX_COUNT_OF_PAGES
    : Math.ceil(totalResults / PAGE_SIZE_LATEST);
};
