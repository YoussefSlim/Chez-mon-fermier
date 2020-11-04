import PropTypes from 'prop-types';
import React from 'react';
import slugify from 'react-slugify';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Products from '../Products';
import './style.scss';


const Shop = ({ shops }) => {
  const shop = shops.find(({ id }) => id === 1);
  console.log(shop);
  return shop;
}
  // console.log('je suis dans shop =>', shops);

  
  
    
    // <Card key={id} className="content-shop_left">
    //   <Card.Img variant="top" src={`/shops/${slugify(id)}.jpg`} className="card-img-top" alt="Image du vendeur" />
    //   <Card.Body>
    //     <Card.Title>{name}</Card.Title>
    //     <Card.Text><Card.Img variant="top" src={`/icon-coq.png`} className="icon-coq" alt="Icone de localisation" />{city}</Card.Text>
    //     <Card.Text>
    //       <div className="extra">
    //           <p>Indice de statisfaction:</p>
    //           <p className="fa fa-star rating text-warning" data-rating="4"></p>
    //           <p className="fa fa-star rating text-warning" data-rating="4"></p>
    //           <p className="fa fa-star rating text-warning" data-rating="4"></p>
    //           <p className="fa fa-star rating text-warning" data-rating="4"></p>
    //           <p className="fa fa-star rating text-secondary" data-rating="4"></p>
    //        </div>
    //     </Card.Text>
    //     <Link className="btn btn-blue" to={`/shops/${slugify(name)}`}>Voir les produits </Link>
    //   </Card.Body>
    //   <Card.Body>
        
    //   </Card.Body>
    // </Card>
  


// Shop.propTypes = {
//   shops: PropTypes.array.isRequired,
//   name: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   postcode: PropTypes.string.isRequired,
//   phone_number: PropTypes.string.isRequired,
// };

export default Shop;
