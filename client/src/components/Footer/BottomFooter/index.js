import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.scss';

const BottomFooter = () => (
  <Card>
    <Card.Body>
      <div className="bottom-footer">
        <p>© 2020 Copyright Chez mon fermier</p>
      </div>
    </Card.Body>
  </Card>
);

export default BottomFooter;
