import Products from '../Products';
import React from 'react';
import Footer from '../Footer';
import { Slides } from './Slides';

import './style.scss';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Slides />
      <Products />
      <Footer />
    </div>
  );
};
