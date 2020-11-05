import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Recipe from 'src/components/Cart/Recipe/recipes';

import './style.scss';

const Cart = ({ fetchCart, removeItem, addQuantity, subtractQuantity, list, total }) => {
  useEffect(() => {
    removeItem();
  }, [fetchCart()]);

  //to remove the item completely
  const handleRemove = (id) => {
    removeItem(id);
  };
  //to add the quantity
  const handleAddQuantity = (id) => {
    addQuantity(id);
  };
  //to substruct from the quantity
  const handleSubtractQuantity = (id) => {
    subtractQuantity(id);
  };
  const addedItems = list.length ? (
    list.map((item) => (
      <li key={item.id} className="collection-item avatar">
        <div className="item-img">
          <img src="/holder3.png" alt={item.title} className="" />
        </div>

        <div className="item-desc">
          <span className="title">{item.title}</span>

          <p>
            <b>Price: {item.price_ttc}$</b>
          </p>
          <p>
            <b>Quantity: {item.quantity}</b>
          </p>

          <button
            className="waves-effect waves-light btn pink remove"
            onClick={() => {
              handleRemove(item.id);
            }}
          >
            Remove
          </button>
        </div>
      </li>
    ))
  ) : (
    <p>Votre pannier est vide</p>
  );
  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">{addedItems}</ul>
      </div>
      <Recipe total={total} />
    </div>
  );
};

Cart.propTypes = {
  addQuantity: PropTypes.func,
  list: PropTypes.shape({
    length: PropTypes.any,
    map: PropTypes.func,
  }),
  removeItem: PropTypes.func,
  subtractQuantity: PropTypes.func,
};

export default Cart;
