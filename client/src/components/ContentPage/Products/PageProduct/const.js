import { useState } from 'react';

// GENERAL PRICE

export const incrementQuentaty = () => {
  // EVERYTIME WHEN CLICK PLUS BUTTON IT WILL INCREMENT BY ONE
  // AND TOTAL PRICE WILL BE CHANGE
  // PRICE * QUANITY = TOTAL
  setQuantaty((prevQuantity) => prevQuantity + 1);
  setTotalPrice((prevPrice) => prevPrice + generalPrice);
};
export const decrementQuantity = () => {
  setQuantaty((prevQuantity) => prevQuantity - 1);
  setTotalPrice((prevPrice) => prevPrice - generalPrice);
};
export const usingCouponDiscount = (e) => {
  e.preventDefault();
  console.log(e.target.value);
  if (e.target.value === 123) {
    console.log('set total price and coupon discount');
    setCouponDiscount((prevDiscount) => prevDiscount);
    setTotalPrice((prevPrice) => prevPrice - couponDiscount * quantity);
  }
};

export const handleClick = (e) => {
  e.preventDefault();
  setAddToCart((prevAddToCart) => (prevAddToCart = true));
};
