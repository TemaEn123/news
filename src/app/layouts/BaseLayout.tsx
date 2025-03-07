import React from 'react';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/footer';

const BaseLayout = () => {
  return (
    <div className="wrapper">
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
