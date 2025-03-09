import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilters, INewsApiResponse } from '../model/interfaces';
import { setNews, setSearchNews, setTopNews } from '../model/newsSlice';
import { PAGE_SIZE_SEARCH } from '@/shared/constants';

const BASE_API_URL = process.env.BASE_API_URL;
const API_KEY = process.env.API_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<INewsApiResponse, IFilters>({
      query: (filters) => {
        return {
          url: 'everything',
          params: {
            apiKey: API_KEY,
            ...filters,
            pageSize: filters.pageSizeLatest,
            category: '',
          },
        };
      },
      keepUnusedDataFor: 0,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setNews(data.articles));
      },
    }),
    getTopNews: builder.query<INewsApiResponse, IFilters>({
      query: (filters) => {
        return {
          url: 'top-headlines',
          params: {
            apiKey: API_KEY,
            sortBy: filters.sortBy,
            language: filters.language,
            category: filters.category ? filters.category : '',
            pageSize: filters.pageSizeTop,
          },
        };
      },
      keepUnusedDataFor: 0,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setTopNews(data.articles));
      },
    }),
    getCurrentNews: builder.query<INewsApiResponse, string>({
      query: (title) => {
        return {
          url: 'everything',
          params: {
            apiKey: API_KEY,
            searchIn: 'title',
            q: title,
          },
        };
      },
    }),
    getSearchNews: builder.query<INewsApiResponse, string>({
      query: (title) => {
        return {
          url: 'everything',
          params: {
            apiKey: API_KEY,
            searchIn: 'title',
            q: title,
            pageSize: PAGE_SIZE_SEARCH,
          },
        };
      },
      keepUnusedDataFor: 0,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setSearchNews(data.articles));
      },
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetTopNewsQuery,
  useGetCurrentNewsQuery,
  useGetSearchNewsQuery,
} = newsApi;
