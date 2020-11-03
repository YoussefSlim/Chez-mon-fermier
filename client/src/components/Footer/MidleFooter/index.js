import React from 'react';
import { Link, Router } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './style.scss';

const MidleFooter = () => (
  <Card.Body className="container-bandeau">
    <div className="container-bandeau">
      <div className="col-md-3 col-lg-4 col-xl-3  column-logo">
        <a href="/">
          <img src="/app_log.png" className="logo-small jello-horizontal" alt="logo test" />
        </a>
      </div>
      <div className=" col-lg-2 col-xl-2 mx-auto mb-4">
        <h5 className="text-uppercase font-weight-bold">Chez mon fermier</h5>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing tenetur rem tempore aut numquam
          distinctio quidem.
        </p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h5 className="text-uppercase font-weight-bold">Informations</h5>

        <p>
          <a href="/mentions-legales" className="dark-grey-text">
            Mentions légales
          </a>
        </p>
        <p>
          <a href="/conditions-generales-de-vente" className="dark-grey-text">
            Conditions générales de vente
          </a>
        </p>
        <p>
          <a href="/le-concept" className="dark-grey-text">
            Le concept
          </a>
        </p>
        <p>
          <a href="/notre-equipe" className="dark-grey-text">
            Notre équipe
          </a>
        </p>
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h5 className="text-uppercase font-weight-bold">Aides</h5>
        <p>
          <a href="/mon-compte" className="dark-grey-text">
            Mon compte
          </a>
        </p>
        <p>
          <a href="/devenir-vendeur" className="dark-grey-text">
            Devenir vendeur
          </a>
        </p>
        <p>
          <a href="/contactez-nous" className="dark-grey-text">
            Contactez-nous
          </a>
        </p>
      </div>
    </div>
  </Card.Body>
);

export default MidleFooter;
