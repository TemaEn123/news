import { lazy } from 'react';
import ErrorPage from './ui/Page';

const LazyErrorPage = lazy(() => import('./ui/Page'));

export { ErrorPage, LazyErrorPage };
