import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const LogoutButton = ({ handleLogout }) => (
  <button
    className="icon-button"
    label="se deconnect√©"
    type="button"
    htmlFor="se deconnect√©"
    onClick={handleLogout}
  >
    Se deconnect√©
  </button>
);

LogoutButton.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

// LogoutButton.propTypes = {
//   handleLogout: PropTypes.func,
// };

export default LogoutButton;
