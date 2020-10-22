import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const ToLogIn = () => {
  return (
    <div class="modal-login">
      <div
        class="modal fade"
        id="login"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">S'identifier</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="px-4 py-3">
                <div class="form-group">
                  <label for="exampleDropdownFormEmail1">Adresse email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleDropdownFormEmail1"
                    placeholder="email@exemple.com"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleDropdownFormPassword1">Mot de passe</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleDropdownFormPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                  <label class="form-check-label" for="dropdownCheck">
                    se souvenir de moi
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  se connecter
                </button>
              </form>
              <div class="dropdown-divider"></div>

              <Link to="/inscription" class="dropdown-item">
                Nouveau par ici?
              </Link>

              <a class="dropdown-item" href="#">
                Mot de passe oublié?
              </a>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToLogIn;
