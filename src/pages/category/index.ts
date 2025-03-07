import { lazy } from 'react';
import CategoryPage from './ui/Page';

const LazyCategoryPage = lazy(() => import('./ui/Page'));

export { CategoryPage, LazyCategoryPage };
