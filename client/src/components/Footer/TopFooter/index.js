import React from 'react';
import Card from 'react-bootstrap/Card';
import SocialMedia from './SocialMedia';
import './style.scss';

const TopFooter = () => (
  <div className="bottom">
    <Card.Header>
      <SocialMedia />
    </Card.Header>
  </div>
);

export default TopFooter;
