import { RootState } from '@/app/AppStore';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters, INews } from './interfaces';
import { getDayBeforeYesterday } from '@/shared/helpers/getDayBeforeYesterday';
import { LANGUAGE, PAGE_SIZE_LATEST, PAGE_SIZE_TOP, SORT_BY } from '@/shared/constants';

interface INewsState {
  news: INews[];
  topNews: INews[];
  currentNews: INews | null;
  filters: IFilters;
}

const initialState: INewsState = {
  news: [],
  topNews: [],
  currentNews: null,
  filters: {
    page: 1,
    pageSizeTop: PAGE_SIZE_TOP,
    pageSizeLatest: PAGE_SIZE_LATEST,
    language: LANGUAGE,
    sortBy: SORT_BY,
    from: getDayBeforeYesterday(),
    category: null,
    q: 'in',
  },
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setTopNews: (state, action: PayloadAction<INews[]>) => {
      state.topNews = action.payload;
    },
    setCurrentNews: (state, action: PayloadAction<INews>) => {
      state.currentNews = action.payload;
    },
    setFilters: (state, action: PayloadAction<IFilters>) => {
      state.filters = action.payload;
    },
  },
});

export const { setNews, setTopNews, setCurrentNews, setFilters } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.news;
export const selectTopNews = (state: RootState) => state.news.topNews;
export const selectCurrentNews = (state: RootState) => state.news.currentNews;
export const selectFilters = (state: RootState) => state.news.filters;

export default newsSlice.reducer;
