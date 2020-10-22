import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const ToLogIn = () => {
  return (
    <div className="modal-login">
      <div
        className="modal fade"
        id="login"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">S'identifier</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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

              <Link to="/inscription" class="dropdown-item" id="histModal">
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
