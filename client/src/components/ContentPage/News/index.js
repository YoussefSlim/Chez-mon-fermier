import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.scss';

const News = () => (
  <div className="news vibrate-1">
    <Card style={{ width: '60rem' }}>
      <Card.Img variant="top" src="holder3.png" />
    </Card>
    <Card style={{ width: '60rem' }}>
      <div className="body-news">
        <Card.Body>
          <Card.Title>News</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  </div>
);

export default News;
