import React from 'react';
import Footer from '../Footer';

import './style.scss';

const SignUp = () => {
  return (
    <div className="form-sinup">
      <form className="signup">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Nom</label>
            <input type="text" className="form-control" id="inputName" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Prenom</label>
            <input type="text" className="form-control" id="inputLastName" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Mot de passe </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword5">Confirmer votre mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword5"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail5">Confirmer votre email</label>
            <input type="email" className="form-control" id="inputEmail5" placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Adresse</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Complement d'adresse</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Lieu-dit</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Ville</label>
            <select id="inputState" className="form-control">
              <option defaultValue>Choisir...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Code postal</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              J'accepte les conditions génèrales
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          s'enregistrer
        </button>
      </form>
      <Footer />
    </div>
  );
};
export default SignUp;
