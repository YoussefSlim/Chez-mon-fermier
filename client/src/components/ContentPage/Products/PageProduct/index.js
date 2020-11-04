import React, { useState } from 'react';
import Counter from 'src/containers/Counter';
import { addTocart } from 'src/actions/cart';
import './style.scss';
import { Card } from 'react-bootstrap';

const PageProduct = ({ products }) => {
  console.log('je suis dans la page produit => ', products);
  // GENERAL PRICE
  const defaultGeneralPrice = 0 + '€';
  const [generalPrice, setGeneralPrice] = useState(defaultGeneralPrice);

  // QUANTITY
  const [quantity, setQuantaty] = useState(1);

  // DISCOUNT
  let dafaultDiscount = 5;
  // let defaultCouponDiscount = quantity * dafaultDiscount ;
  const [couponDiscount, setCouponDiscount] = useState(dafaultDiscount);
  console.log(couponDiscount);

  // TOTAL PRICE
  // let defaultTotalPrice = generalPrice * quantity - couponDiscount ;
  // console.log(defaultTotalPrice);
  const [totalPrice, setTotalPrice] = useState(generalPrice);

  const [addToCart, setAddToCart] = useState(false);
  console.log(`Add to cart button click ? ${addToCart}`);

  function incrementQuentaty() {
    // EVERYTIME WHEN CLICK PLUS BUTTON IT WILL INCREMENT BY ONE
    // AND TOTAL PRICE WILL BE CHANGE
    // PRICE * QUANITY = TOTAL
    setQuantaty((prevQuantity) => prevQuantity + 1);
    setTotalPrice((prevPrice) => prevPrice + generalPrice);
  }
  function decrementQuantity() {
    setQuantaty((prevQuantity) => prevQuantity - 1);
    setTotalPrice((prevPrice) => prevPrice - generalPrice);
  }
  function usingCouponDiscount(e) {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === 123) {
      console.log('set total price and coupon discount');
      setCouponDiscount((prevDiscount) => prevDiscount);
      setTotalPrice((prevPrice) => prevPrice - couponDiscount * quantity);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setAddToCart((prevAddToCart) => (prevAddToCart = true));
  }
  return (
    <div className="product-container">
      <main className="content">
        <section className="content__left">
          <article className="product-content">
            <header className="product-top">
              <img src="/products/1.jpg" className="img-product" />
              <article className="product-info">
                <h1 className="product-title">Rôti de Boeuf</h1>
                <div className="product__quantity-zone">
                  <div className="quantity-zone">
                    <label htmlFor="title">Quantité</label>
                    <Counter />
                    
                  </div>
                  <a href="#" className="wishlist-btn">
                    <i className="fas fa-heart icon-wichlist" />
                  </a>

                  <div className="product__price-zone">
                    <span className="kg-price">14.96 € / kg</span>
                    <strong itemProp="price" className="ttc-price">
                      12€
                    </strong>
                  </div>
                </div>
                <button type="button" onClick={handleClick} className="btn btn-blue btn-add-cart">
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
                    className="nav-link active nav-link-product-page"
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
                    className="nav-link nav-link-product-page"
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
                    className="nav-link nav-link-product-page"
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
                  className="tab-pane fade show active onglet-page-produit"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro similique iusto
                  praesentium cupiditate odio? Dolore tempore fugiat odio neque accusamus natus ad
                  quia quidem! Cupiditate distinctio repellendus quae fugit voluptate recusandae ad
                  nesciunt. Adipisci corporis consequatur culpa quas nulla, ut autem minima
                  molestias, magnam recusandae distinctio ad? Suscipit, modi eius.
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <ul className="onglet-page-produit">
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
                  <ul className="onglet-page-produit">
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
              <div className="card-body encart-vendeur">
                <h5 className="card-title">Nom du vendeur</h5>
                
                <div className="extra">
                  Indice de statisfaction:
                  <img src="/icons/star-yellow.png" className="icon-stars"/>
                  <img src="/icons/star-yellow.png" className="icon-stars"/>
                  <img src="/icons/star-yellow.png" className="icon-stars"/>
                  <img src="/icons/star-yellow.png" className="icon-stars"/>
                  <img src="/icons/star-grey.png" className="icon-vide"/>
                </div>
                <div className="location">
                  <img src="/icon-coq.png" className="icon-coq"/>
                    <p>Clermont-Ferrand(63)</p>
                </div>
                <a href="#" className="btn btn-blue">
                  Voir les produits
                </a>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
    
  );
};

export default PageProduct;
