import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => {
  return (
    <footer className="page-footer font-small blue-grey lighten-5">
      <div className="container">
        <div className="row py-4 d-flex align-items-center container_bandeau">
          <div className="col-xs-12 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <p className="mb-0">Suivez-nous sur les réseaux sociaux</p>
          </div>
          <div className="col-md-6 col-lg-7 text-center text-md-right">
            <div className="footer-icon jello-horizontal">
              <Link to="#" className="fb-ic">
                <i className="fab fa-facebook-f white-text mr-4"></i>
              </Link>
            </div>

            <div className="footer-icon jello-horizontal">
              <Link to="#" className="tw-ic">
                <i className="fab fa-twitter white-text mr-4"></i>
              </Link>
            </div>

            <div className="footer-icon jello-horizontal">
              <Link to="#" className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-4"></i>
              </Link>
            </div>

            <div className="footer-icon jello-horizontal">
              <Link to="#" className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-4"></i>
              </Link>
            </div>

            <div className="footer-icon jello-horizontal">
              <Link to="#" className="ins-ic">
                <i className="fab fa-instagram white-text mr-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center text-md-left mt-5">
        <div className="row mt-3 dark-grey-text footer-column">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4 column-logo">
            <Link to="/">
              <img src="logo-app.png" className="logo-small jello-horizontal" alt="logo test" />
            </Link>
          </div>
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h3 className="text-uppercase font-weight-bold">Chez mon fermier</h3>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"></hr>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere quaerat quos
              nesciunt tenetur rem tempore aut numquam distinctio quidem.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h3 className="text-uppercase font-weight-bold">Informations</h3>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"></hr>
            <p>
              <Link to="/mentions-legales" className="dark-grey-text">
                Mentions légales
              </Link>
            </p>
            <p>
              <Link to="/conditions-generales-de-vente" className="dark-grey-text">
                Conditions générales de vente
              </Link>
            </p>
            <p>
              <Link to="/le-concept" className="dark-grey-text">
                Le concept
              </Link>
            </p>
            <p>
              <Link to="/notre-equipe" className="dark-grey-text">
                Notre équipe
              </Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h3 className="text-uppercase font-weight-bold">Aides</h3>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"></hr>
            <p>
              <Link to="/mon-compte" className="dark-grey-text">
                Mon compte
              </Link>
            </p>
            <p>
              <Link to="/devenir-vendeur" className="dark-grey-text">
                Devenir vendeur
              </Link>
            </p>
            <p>
              <Link to="/contactez-nous" className="dark-grey-text">
                Contactez-nous
              </Link>
            </p>
          </div>
        </div>
        <div className="footer-copyright text-center text-black-50 py-3">
          © 2020 Copyright Chez mon fermier
        </div>
      </div>
    </footer>
  );
};

export default Footer;
