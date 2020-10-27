import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const ToLogIn = () => {
  return (
    <>
      <div
        className="modal fade"
        id="elegantModalForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content form-elegant">
            <div className="modal-header text-center">
              <h3
                className="modal-title w-100 dark-grey-text font-weight-bold my-3"
                id="myModalLabel"
              >
                <strong>S'identifier</strong>
              </h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-4">
              <div className="md-form mb-5">
                <input type="email" id="Form-email1" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="Form-email1">
                  Votre email
                </label>
              </div>

              <div className="md-form pb-3">
                <input type="password" id="Form-pass1" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="Form-pass1">
                  Votre mot de passe
                </label>
                <p className="font-small blue-text d-flex justify-content-end">
                  <Link to="#" className="blue-text ml-1">
                    Mot de passe oublié?
                  </Link>
                </p>
              </div>

              <div className="text-center mb-3">
                <button
                  type="button"
                  className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                >
                  Se connecter
                </button>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                ou se connecter avec:
              </p>

              <div className="row my-3 d-flex justify-content-center">
                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a">
                  <i className="fab fa-facebook-f text-center"></i>
                </button>

                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-white btn-rounded z-depth-1a">
                  <i className="fab fa-google-plus-g"></i>
                </button>
              </div>
            </div>

            <div className="modal-footer mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                vous n'êtes pas membre?
                <Link
                  data-toggle="modal"
                  data-target="#elegantModalForm"
                  to="/inscription"
                  className="blue-text ml-1"
                >
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToLogIn;
