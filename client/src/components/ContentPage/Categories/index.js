import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './style.scss';

const Categories = ({ categories }) =>
  categories.map(({ id, name, description }) => (
    <Card key={id} style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder3.png" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">faire un tour</Button>
      </Card.Body>
    </Card>
  ));

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories;
