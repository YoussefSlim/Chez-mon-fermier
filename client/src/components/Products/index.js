import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="cards">
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="../maquette-web-01.png" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Tomate</h5>
          <p className="card-text">chez mon fermier</p>
          <p className="card-price">1€/kg</p>
          <Link to="#" className="btn btn-primary">
            Ajouter au panier
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
