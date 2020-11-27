import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="p-5 w-full md:w-md flex flex-col justify-center mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
