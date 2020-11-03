import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const LogoutButton = ({ handleLogout }) => (
  <button
    className="icon-button"
    label="se deconnecté"
    type="button"
    htmlFor="se deconnecté"
    onClick={handleLogout}
  >
    Se deconnecté
  </button>
);

LogoutButton.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

// LogoutButton.propTypes = {
//   handleLogout: PropTypes.func,
// };

export default LogoutButton;
