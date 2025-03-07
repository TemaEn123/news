import { lazy } from 'react';
import MainPage from './ui/Page';

const LazyMainPage = lazy(() => import('./ui/Page'));

export { MainPage, LazyMainPage };
