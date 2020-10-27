import React from 'react';
import { Card } from 'react-bootstrap';

import './style.scss';

const Cart = () => (
  <div className="cart">
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            <Card border="light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  </div>
);

export default Cart;
