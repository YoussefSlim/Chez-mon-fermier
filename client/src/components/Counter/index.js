// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.css';

// == Composant
const Counter = ({ count, increment, decrement }) => (
  <div className="counter">
    <button type="button" onClick={decrement}>
      -
    </button>
    <div className="value">{count}</div>
    <button type="button" onClick={increment}>
      +
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

Counter.defaultProps = {
  count: 1,
};
// == Export
export default Counter;
