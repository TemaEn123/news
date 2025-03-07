import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { LazyErrorPage } from '@/pages/error';
import { LazyMainPage } from '@/pages/main';
import { LazyCategoryPage } from '@/pages/category';
import { LazyArticlePage } from '@/pages/article';
import { Loading } from '@/shared/ui';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<BaseLayout />}
          errorElement={
            <Suspense fallback={<Loading />}>
              <LazyErrorPage />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <LazyMainPage />
              </Suspense>
            }
          />
          <Route
            path="/category/:cat"
            element={
              <Suspense fallback={<Loading />}>
                <LazyCategoryPage />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={<Loading />}>
                <LazyArticlePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
