import React from 'react';
import Footer from '../Footer';
import './style.scss';

const NotFound = () => {
  return (
    <>
      <img src="../404.png" className="notfound" alt="404" />
      <Footer />
    </>
  );
};

export default NotFound;
