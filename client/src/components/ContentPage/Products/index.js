import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.scss';

const Products = ({ products }) =>
  products.map(({ id, title, price_ttc }) => (
    <Card key={id} style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder3.png" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price_ttc}€</Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
  ));

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
