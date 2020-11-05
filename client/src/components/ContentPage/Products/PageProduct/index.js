/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Counter from 'src/containers/Counter';

import './style.scss';

const PageProduct = ({ product, counter }) => {
  console.log('je suis dans page product =>', counter);
  return (
    <div className="product-container">
      <main className="content">
        <section className="content__left">
          <article className="product-content">
            <header className="product-top">
              <img src="/holder3.png" className="img-product" />
              <article className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <div className="product__quantity-zone">
                  <div className="quantity-zone">
                    <label htmlFor="title">{product.quantity}</label>
                    <Counter />
                    <small id="titleHelp" className="form-text text-muted">
                      Saisissez la quantité souhaitée.
                    </small>
                  </div>
                  <a href="#" className="wishlist-btn">
                    <i className="fas fa-heart icon-wichlist" />
                  </a>

                  <div className="product__price-zone">
                    <span className="kg-price">{product.price_ttc}/ kg</span>
                    <strong itemProp="price" className="ttc-price">
                      12€
                    </strong>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const cart = JSON.parse(localStorage.getItem('cart')) || [];
                    console.log('cart', cart);
                    const findItem = cart.find((item) => item.id === product.id);
                    console.log('findItem', findItem);
                    if (!findItem) {
                      localStorage.setItem(
                        'cart',
                        JSON.stringify([
                          ...cart,
                          {
                            title: product.title,
                            id: product.id,
                            price_ttc: product.price_ttc,
                            description: product.description,
                            counter,
                          },
                        ])
                      );
                    } else {
                      for (const i = 0; i < cart.length; i++) {
                        if (product.id === cart[i].id) {
                          cart[i].counter += 1;
                          localStorage.setItem('cart', JSON.stringify(cart));
                        }
                      }
                    }
                  }}
                  className="btn btn-blue btn-add-cart"
                >
                  Ajouter au panier
                </button>
                <div className="product__social-zone">
                  <a href="#" className="twitter-btn">
                    <i className="fab fa-twitter-square" />
                  </a>
                  <a href="#" className="facebook-btn">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#" className="instagram-btn">
                    <i className="fab fa-instagram-square" />
                  </a>
                  <a href="#" className="question-link">
                    Posez vos questions aux vendeurs
                  </a>
                </div>
              </article>
            </header>
            <main className="product-description">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Contenance
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Livraison
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  {product.description}
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <ul>
                    <li>Précisez tous produits allergènes</li>
                    <li>Lactose</li>
                    <li>Gluten</li>
                    <li>Sel</li>
                    <li>Sucre etc...</li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <ul>
                    <li>Livraison à domicile : Prix €</li>
                    <li>Retrait en drive : Gratuit</li>
                  </ul>
                </div>
              </div>
            </main>
          </article>
        </section>

        <section className="content__right">
          <aside className="content__right__vendor">
            <div className="card">
              <img
                src="https://semantic-ui.com/images/avatar2/small/matthew.png"
                className="card-img-top"
                alt="Image du vendeur"
              />
              <div className="card-body">
                <h5 className="card-title">Nom du vendeur</h5>
                <p className="card-text">Description courte du vendeur à ajouter ici</p>
                <div className="extra">
                  Indice de statisfaction:
                  <i className="fa fa-star rating text-warning" data-rating="4"></i>
                  <i className="fa fa-star rating text-warning" data-rating="4"></i>
                  <i className="fa fa-star rating text-warning" data-rating="4"></i>
                  <i className="fa fa-star rating text-warning" data-rating="4"></i>
                  <i className="fa fa-star rating text-secondary" data-rating="4"></i>
                </div>
                <address className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  add
                </address>
                <a href="#" className="btn btn-blue">
                  Voir tous ses produits
                </a>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

PageProduct.propTypes = {
  addQuantity: PropTypes.any,
  counterCart: PropTypes.shape({
    value: PropTypes.number,
  }),
  description: PropTypes.any,
  id: PropTypes.any,
  price_ttc: PropTypes.any,
  quantity: PropTypes.any,
  removeItem: PropTypes.any,
  subtractQuantity: PropTypes.any,
  title: PropTypes.any,
};

export default PageProduct;
