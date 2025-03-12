import { calculateCountOfPages } from './calculateCountOfPages';
import { MAX_COUNT_OF_PAGES, PAGE_SIZE_LATEST } from '../constants';

describe('тестриуем calculateCountOfPages', () => {
  it('должен вернуть 0 если totalResults undefined', () => {
    expect(calculateCountOfPages(undefined)).toBe(0);
  });

  it('должен вернуть 0 если totalResults 0', () => {
    expect(calculateCountOfPages(0)).toBe(0);
  });

  it('если totalResults меньше или равен page_size_latest, должен вернуть 1', () => {
    expect(calculateCountOfPages(PAGE_SIZE_LATEST)).toBe(1);
    expect(calculateCountOfPages(PAGE_SIZE_LATEST - 1)).toBe(1);
  });

  it('если страниц больше чем max_count_of_pages, возвращаем max_count_of_pages', () => {
    const totalResults: number = MAX_COUNT_OF_PAGES * PAGE_SIZE_LATEST + 1;
    expect(calculateCountOfPages(totalResults)).toBe(MAX_COUNT_OF_PAGES);
  });

  it('если страниц меньше чем max_count_of_pages, возвращаем кол-во страниц', () => {
    const totalResults: number = PAGE_SIZE_LATEST * 2;
    expect(calculateCountOfPages(totalResults)).toBe(2);
  });

  it('должен округлять вверх плавающие числа кол-ва страниц', () => {
    const totalResults: number = PAGE_SIZE_LATEST + 1;
    expect(calculateCountOfPages(totalResults)).toBe(2);
  });
});
