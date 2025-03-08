import { categories } from '@/shared/constants';

export interface INews {
  source: {
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type Category = (typeof categories)[number];

export interface IFilters {
  page: number;
  pageSizeTop: number;
  pageSizeLatest: number;
  category: Category | null;
  language: string;
  q: string;
  from: string;
  sortBy: string;
}

export interface INewsApiResponse {
  status: string;
  totalResults: number;
  articles: INews[];
}
