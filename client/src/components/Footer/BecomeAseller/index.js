import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const BecomeAseller = () => {
  return (
    <div class="row d-flex justify-content-center mb-4">
      <div class="col-md-6 text-center">
        <div className="border">
          <h3>Devenir vendeur</h3>
          <p class="font-weight-bold">contact@chezmonfermier.com</p>

          <p>
            Vous voulez devenir vendeur chezmonfermier, rien de plus simple il
            vous suffit de vous inscrire en cliquant sur ce lien.
          </p>
        </div>

        <Link href="#" class="mx-1" role="button">
          <i class="new-sale">Le tunnel des nouveaux vendeurs</i>
        </Link>
      </div>
    </div>
  );
};

export default BecomeAseller;
