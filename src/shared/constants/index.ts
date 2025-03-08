import { ICategories } from '../interfaces';

export const categories: ICategories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
] as const;

export const PAGE_SIZE_TOP: number = 12;
export const PAGE_SIZE_LATEST: number = 20;
export const LANGUAGE: string = 'en';
export const SORT_BY: string = 'publishedAt';
