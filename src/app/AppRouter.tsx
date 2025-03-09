import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { ErrorPage } from '@/pages/error';
import { LazyMainPage } from '@/pages/main';
import { LazyCategoryPage } from '@/pages/category';
import { LazyArticlePage } from '@/pages/article';
import { Loading } from '@/shared/ui';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <LazyMainPage />
              </Suspense>
            }
          />
          <Route
            path="category/:cat"
            element={
              <Suspense fallback={<Loading />}>
                <LazyCategoryPage />
              </Suspense>
            }
          />
          <Route
            path="news/:id"
            element={
              <Suspense fallback={<Loading />}>
                <LazyArticlePage />
              </Suspense>
            }
          />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
