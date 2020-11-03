import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Shop = ({ shops }) => {
  console.log('je suis dans shop =>', shops);
  return shops.map(({ id, name, address, city, phone_number, postcode }, index) => (
    <Card key={id} style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder3.png" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{address}</Card.Text>
        <Card.Text>{city}</Card.Text>
        <Card.Text>{postcode}</Card.Text>
        <Card.Text>{phone_number}</Card.Text>
      </Card.Body>
    </Card>
  ));
};

Shop.propTypes = {
  shops: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
};

export default Shop;