import React from 'react';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/footer';
import { useTheme } from '../provider/ThemeProvider';

const BaseLayout = () => {
  const { isDark } = useTheme();

  return (
    <div className={`wrapper ${isDark ? 'wrapper_dark' : null}`}>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
