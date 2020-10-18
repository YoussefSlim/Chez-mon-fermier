import React from 'react';
import Footer from '../Footer';
import LeftSideBar from '../LeftSideBar';
import Products from '../Products';
import StaticHeader from '../StaticHeader';

import './style.scss';

const HomePage = () => {
  return (
    
    <div className="HomePage">
      <StaticHeader />
      <LeftSideBar />
      <div className="first-slide">
          <img src="../maquette-web-01.png" className="slide" alt="slide" />
      </div>
      <div className="carrousels">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../maquette-web-03.jpg" className="d-block w-100" alt="slide1" />
            </div>
            
            <div className="carousel-item">
              <img src="../maquette-web-03.jpg" className="d-block w-100" alt="slide3" />
            </div>
        </div>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../maquette-web-03.jpg" className="d-block w-100" alt="slide1" />
            </div>
            
            <div className="carousel-item">
              <img src="../maquette-web-03.jpg" className="d-block w-100" alt="slide3" />
            </div>
        </div>
      </div>
      </div>
      <Products />
      <Footer />     
    </div>
   
  );
}

export default HomePage;