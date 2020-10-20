import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue-grey lighten-5">
      <div className="container text-center text-md-left mt-5">
        <div className="row mt-3 dark-grey-text footer-column">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4 column-logo">
            <img
              src="logo-app.png"
              className="logo-small jello-horizontal"
              alt="logo test"
            />
          </div>
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h3 className="text-uppercase font-weight-bold">
              Chez mon fermier
            </h3>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"></hr>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              facere quaerat quos nesciunt tenetur rem tempore aut numquam
              distinctio quidem.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h3 className="text-uppercase font-weight-bold">Informations</h3>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"></hr>
            <p>
              <Link className="dark-grey-text" to="/LegalNotice">
                Mentions légales
              </Link>
            </p>
            <p>
              <Link className="dark-grey-text" to="/TermsOfSales">
                Conditions générales de vente
              </Link>
            </p>
            <p>
              <Link className="dark-grey-text" to="/TheConcept">
                Le concept
              </Link>
            </p>
            <p>
              <Link className="dark-grey-text" to="/OurTeam">
                Notre équipe
              </Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h3 className="text-uppercase font-weight-bold">Aides</h3>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"></hr>
            <p>
              <Link className="dark-grey-text" to="/MyAccount">
                Mon compte
              </Link>
            </p>
            <p>
              <Link className="dark-grey-text" to="/BecomeAseller">
                Devenir Vendeur
              </Link>
            </p>
            <p>
              <Link className="dark-grey-text" to="/Contact">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-4 d-flex align-items-center container_bandeau">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <p className="mb-0">Suivez-nous sur les réseaux sociaux</p>
          </div>
          <div className="col-md-6 col-lg-7 text-center text-md-right">
            <div className="footer-icon jello-horizontal">
              <Link className="fb-ic">
                <i className="fab fa-facebook-f white-text mr-4"></i>
              </Link>
            </div>

            <div className="footer-icon jello-horizontal">
              <Link className="tw-ic">
                <i className="fab fa-twitter white-text mr-4"></i>
              </Link>
            </div>

            <div className="footer-icon jello-horizontal">
              <Link className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-4"></i>
              </Link>
            </div>

            <div className="footer-icon jello-horizontal">
              <Link className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-4"></i>
              </Link>
            </div>

            <div className="footer-icon jello-horizontal">
              <Link className="ins-ic">
                <i className="fab fa-instagram white-text mr-4"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center text-black-50 py-3 footer-copyright">
          © 2020 Copyright:
          <Link className="dark-grey-text" to="/HomePage">
            Chezmonfermier.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
