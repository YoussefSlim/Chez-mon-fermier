import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

import './style.scss';

const Carrousel = () => (
  <div className="content-carousel">
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/slider1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Mangez bien, mangez local !</h3>
          <p>Et si mangez mieux se trouvait à coté de chez vous? Mais manger mieux ça coûte chère? Et trouver des produits locaux c’est trop compliqué? Et bien 
chez monfermier.fr casse les préjugés et vous permet de consommer des produits locaux à côté de chez vous !</p>
<Link to={`/le-concept`}>Suivez le guide</Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/slider-2.jpg" alt="Second slide" />

        <Carousel.Caption>
          <h3>Livraison ou retrait, à vous de choisir !</h3>
          <p>Composez votre panier de course, auprès de vos producteurs locaux, puis faites vous livrer*,, 
          ou retirer vos produis directement chez le producteur ! C’est vous qui choisissez  et simple 
          comme «bonjour» !</p>
          <Link to={`/produits/`}>Voir les produits</Link>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    <Card>
      <Card.Body>
        <img src="/devenez-vendeur" className="slide" alt="devenez vendeur" />
        <img src="/achetez-local.jpg" className="slide" alt="achetez local" />
      </Card.Body>
    </Card>
  </div>
);

export default Carrousel;
