// Import npm
import React from 'react';

// Import style css
import './style.scss';

export const Slides = () => {
  return (
    <div className="slides">
      <div className="first-slide">
        <img src="../firstslide.png" className="slide" alt="slide" />
      </div>
      <div className="carrousels">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../slide1.png" className="d-block w-100" alt="slide1" />
            </div>

            <div className="carousel-item">
              <img src="../slide2.png" className="d-block w-100" alt="slide3" />
            </div>
          </div>
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../slide1.png" className="d-block w-100" alt="slide1" />
            </div>

            <div className="carousel-item">
              <img src="../slide2.png" className="d-block w-100" alt="slide3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
