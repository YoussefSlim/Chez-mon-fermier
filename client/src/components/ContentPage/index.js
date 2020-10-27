import React from 'react';
import Products from 'src/containers/ContentPage/Products';
import News from 'src/containers/ContentPage/News';
import Categories from 'src/containers/ContentPage/Categories';

import Carousel from 'src/containers/ContentPage/Carousel';

import './style.scss';

const ContentPage = () => (
  <div className="">
    <Carousel />
    <div className="products">
      <Products />
      <Products />
      <Products />
    </div>
    <div className="categories">
      <Categories />
    </div>
    <News />
  </div>
);

export default ContentPage;
