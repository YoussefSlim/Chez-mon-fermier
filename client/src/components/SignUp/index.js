import React from 'react';
import Footer from '../Footer';

import './style.scss';

const SignUp = () => {
  return (
    <div className="form-sinup">
      <form className="signup">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName">Nom</label>
            <input type="text" class="form-control" id="inputName" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputLastName">Prenom</label>
            <input type="text" class="form-control" id="inputLastName" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputPassword4">Mot de passe </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Confirmer votre mot de passe</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Confirmer votre email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Adresse</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="" />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Complement d'adresse</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Lieu-dit</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Ville</label>
            <select id="inputState" class="form-control">
              <option selected>Choisir...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Code postal</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              J'accepte les conditions génèrales
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          s'enregistrer
        </button>
      </form>
      <Footer />
    </div>
  );
};
export default SignUp;
