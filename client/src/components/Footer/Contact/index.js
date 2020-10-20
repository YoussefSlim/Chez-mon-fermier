import React from "react";
import "./style.scss";

const Contact = () => {
  return (
    <div class="container my-5 py-5 z-depth-1">
      <div class="col-md-6">
        <form class="text-center" action="#!" />

        <h3 class="font-weight-bold mb-4">Contactez-nous</h3>
        <div className="form">
          <input
            type="text"
            id="defaultContactFormName"
            class="form-control mb-4"
            placeholder="Nom"
          />

          <input
            type="email"
            id="defaultContactFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
          />

          <label>Sujet</label>
          <select class="browser-default custom-select mb-4">
            <option value="" disabled>
              Choisir les options
            </option>
            <option value="1" selected>
              Retour
            </option>
            <option value="2">Signaler un bogue</option>
            <option value="3">Demande de fonctionnalité</option>
            <option value="4">Demande de fonctionnalité</option>
          </select>

          <div class="form-group">
            <textarea
              class="form-control rounded-0"
              id="exampleFormControlTextarea2"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>

          <div class="custom-control custom-checkbox mb-4">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultContactFormCopy"
            />
            <label class="custom-control-label" for="defaultContactFormCopy">
              Envoie moi une copie de ce message
            </label>
          </div>

          <button class="btn btn-info btn-block btn-submit" type="submit">
            ENVOYER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
