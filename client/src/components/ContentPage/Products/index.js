/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import slugify from 'src/utils/slugify';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.scss';

const Products = ({ products }) =>
  products.map(({ id, title, price_ttc }, index) => (
    <Card key={id} style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder3.png" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price_ttc}€</Card.Text>
        <Card.Text>{index}€</Card.Text>
      </Card.Body>
      <Link to={`/produit/${slugify(title)}`}>details de produit </Link>
    </Card>
  ));

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
