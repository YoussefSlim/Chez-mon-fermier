import React from 'react';
import Products from 'src/containers/ContentPage/Products';
import News from 'src/containers/ContentPage/News';
// import Categories from 'src/containers/ContentPage/Categories';

import Carousel from 'src/containers/ContentPage/Carousel';
import Shop from 'src/containers/ContentPage/Shop';

import './style.scss';
import { Link } from 'react-router-dom';

const ContentPage = () => (
  <div className="hp-content">
    <Carousel />
    <div className="products">
      <Products />
      
    </div>
    {/* <div className="categories">
      <Categories />
    </div> */}
    {/*<section className="shop">
       <Shop /> 

    </section>*/}
    <News />
  </div>
);

export default ContentPage;
