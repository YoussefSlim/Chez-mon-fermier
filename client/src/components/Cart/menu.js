import React from 'react';
import './style.scss';

const circle = (quantity) => <span className="circle">{quantity}</span>;

const Menu = ({ addToCart, quantity }) => (
  <div className="menu">
    <div className="items">
      <ul className="item-2">
        <li>
          <a href="#">
            Cart
            <img src="../icon/shopping-cart.svg" width="20px" alt="" />
            {addToCart === true ? circle(quantity) : null}
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;
