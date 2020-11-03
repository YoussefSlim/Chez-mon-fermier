import React from 'react';

import TopFooter from './TopFooter';
import MidleFooter from './MidleFooter';
import BottomFooter from './BottomFooter';
import './style.scss';

const Footer = () => (
  <div className="bottom">
    <TopFooter />
    <MidleFooter />
    <BottomFooter />
  </div>
);

export default Footer;
