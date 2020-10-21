import React from 'react';
import './style.scss';

const MyAccount = () => {
  return (
    <div class="container-fluid mt-3 mb-5">
      <img src="maquette-web-01.png" className="picture" alt="" />
      <div class="mask">
        <div class="container py-5 my-5">
          <h3 class="font-weight-bold text-center white-text pb-2">Inscription</h3>
          <p class="lead text-center white-text pt-2 mb-5">
            Commencez à explorer notre site tout à fait gratuitement.
          </p>

          <div class="fun ">
            <div class="card">
              <div class="card-body z-depth-2 px-4">
                <div class="md-form mt-3">
                  <i class="fa fa-user prefix grey-text"></i>
                  <input type="text" id="form3" class="form-control" />
                  <label for="form3">Your name</label>
                </div>
                <div class="md-form">
                  <i class="fa fa-envelope prefix grey-text"></i>
                  <input type="text" id="form2" class="form-control" />
                  <label for="form2">Your email</label>
                </div>
                <div class="md-form">
                  <i class="fas fa-key prefix grey-text"></i>
                  <input type="text" id="form4" class="form-control" />
                  <label for="form4">Your password</label>
                </div>
                <div class="my-3">
                  <button class="btn btn-indigo btn-block">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
