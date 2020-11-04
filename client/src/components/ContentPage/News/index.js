import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.scss';

const News = () => (
  <div className="news">
    
    <Card className="card-news">
       
        <Card.Img variant="top" src="holder3.png" className="card-news-img"/> 
        <Card.Body className="card-news-infos">
          <h3 className="card-news-title">Le Concept</h3>
          <Card.Text className="card-news-text">
          <p>La genèse du projet est née suite à une volonté de consommer des aliments produits localement, dans un souci économique, dans une période sanitaire compliquée, et de manger mieux et plus responsable.
          <br></br>
          
          </p>
          <p>De ce fait, il est venu à l’idée du créateur du projet, de vouloir sensibiliser les gens sur trois grands objectifs : </p>
          <ol>
            <li>1- Manger mieux, en consommant des produits de meilleures qualités, et économiquement intéressant. </li>
            <li>2- Soutenir l’agriculture française qui traverse une crise très importante.</li>
            <li>3- Faire un geste pour la planète, en limitant la pollution liée au transport, en consommant des produits qui n’auront pas fait le tour de la planète, avant d’arriver dans notre assiette.</li>
          </ol>
           
          <strong className="text-marine">L’idée du projet est la suivante :</strong>
          <br></br><br></br>
          <ol>
           <li>1- Proposer une plateforme qui permet aux clients de consommer des produits alimentaires, provenant de producteurs locaux, fraîchement sortis de la ferme.</li>
            <li>2- Permettre aux producteurs de faire connaître leurs produits aux plus grands nombre, tout en tirant un revenu supplémentaire, hors circuit classique.</li>
            <li>3- Ré-éduquer et sensibiliser les gens autour de ces nobles valeurs: “du Producteur à l’assiette”.</li>
            </ol>
          </Card.Text>
        </Card.Body>
     
    </Card>
  </div>
);

export default News;
