import React, { useState } from 'react';
import Menu from 'src/components/Cart/menu';

import Counter from 'src/containers/Counter';

const Cart = () => {
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
    <div className="Cart">
      <Menu quantity={quantity} addToCart={addToCart} />
      <br />
      <br />
      <br />
      <div className="box">
        <div className="image-product">
          <img src="/holder3.png" alt="" />
        </div>
        <div className="detail">
          <div className="title">FC Bayern München</div>
          <div className="desc">
            FC Bayern Munich First team squad First team squad Women's team The FC Bayern Women
            represent the club in the Bundesliga and Women's Champions League.
          </div>
        </div>
        <div className="set-quan set-bg">
          <div className="quantaty">Quantaty {quantity}</div>
          <div className="btns">
            <Counter />
          </div>
        </div>
        <div className="price">
          <div className="gp">General price {generalPrice}$</div>
          <div className="coupon set-bg">
            Use Coupon
            <form>
              <input
                onChange={usingCouponDiscount}
                placeholder="Enter your coupon code"
                type="text"
              />
            </form>
          </div>
          <div className="total-price">Total Price {totalPrice}$</div>
        </div>
        <div className="add set-bg">
          <button className="btn" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
