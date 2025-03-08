import '@/shared/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import { store } from './AppStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
