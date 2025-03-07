import { lazy } from 'react';
import ArticlePage from './ui/Page';

const LazyArticlePage = lazy(() => import('./ui/Page'));

export { ArticlePage, LazyArticlePage };
