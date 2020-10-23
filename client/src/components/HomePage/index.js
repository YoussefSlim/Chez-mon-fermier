import Products from 'src/containers/Products';
import React, { useEffect } from 'react';
import Footer from 'src/components/Footer';
import { Slides } from './Slides';

import './style.scss';

const HomePage = ({ fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="HomePage">
      <Slides />
      <Products />
      <Footer />
    </div>
  );
};
export default HomePage;
