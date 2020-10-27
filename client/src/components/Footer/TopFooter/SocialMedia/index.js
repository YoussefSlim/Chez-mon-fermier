import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './style.scss';

const SocialMedia = () => (
  <div className="social-media ">
    <p className="top-footer ">Suivez-nous sur les réseaux sociaux</p>
    <a href="https://www.facebook.com" className="facebook social jello-horizontal">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="https://www.twitter.com" className="twitter social jello-horizontal">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="https://www.instagram.com" className="instagram social jello-horizontal">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a href="https://www.youtube.com" className="youtube social jello-horizontal">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
  </div>
);

export default SocialMedia;
