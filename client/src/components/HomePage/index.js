import React from "react";
//import LeftSideBar from "../LeftSideBar";
//import StaticHeader from "../StaticHeader";
import Footer from "../Footer";

import "./style.scss";

const HomePage = () => {
  return (
    <div className="HomePage">
      {/*<StaticHeader />*/}
      {/*<LeftSideBar />*/}
      <div className="HomePage__slider">
        <img className="slider" src="../maquette-web-01.png" alt="SLIDER" />
      </div>
      <div className="HomePage__products">
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
        <div className="HomePage__products--product">
          <img
            className="ImageProduct"
            src="../logo-app.png"
            alt="image_product"
          />
          <p>category</p>
          <p>description product</p>
          <p>price €</p>
          <p className="panier">Ajouter au panier</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
