import React from "react";
import "./style.scss";

const TheConcept = () => {
  return (
    <div className="concept">
      <div className="concept__logo">
        <img
          src="logo-app.png"
          className="logo-small jello-horizontal"
          alt="logo test"
        />
      </div>
      <div className="concept__text">
        <h2>Concept du projet:</h2>
        La genèse du projet est née suite à une volonté de consommer des
        aliments produits localement, dans un souci économique, dans une période
        sanitaire compliquée, et de manger mieux et plus responsable. De ce
        fait, il est venu à l’idée du créateur du projet, de vouloir
        sensibiliser les gens sur trois grands objectifs :
        <ul>
          <li>
            1- Manger mieux, en consommant des produits de meilleures qualités,
            et économiquement intéressant.
          </li>
          <li>
            2- Soutenir l’agriculture française qui traverse une crise très
            importante.
          </li>
          <li>
            3- Faire un geste pour la planète, en limitant la pollution liée au
            transport, en consommant des produits qui n’auront pas fait le tour
            de la planète, avant d’arriver dans notre assiette.
          </li>
        </ul>
        Mais comment mettre en place un tel projet seul? Qu’à cela ne tienne !
        <br />
        Cela tombe bien, nous avons un projet de fin d’études à présenter, et
        pourquoi pas transformer cette utopie en réalité!
        <br />
        L’idée du projet est donc la suivante :
        <ul>
          <li>
            1- Proposer une plateforme qui permet aux clients de consommer des
            produits alimentaires, provenant de producteurs locaux, fraîchement
            sortis de la ferme.
          </li>
          <li>
            2- Permettre aux producteurs de faire connaître leurs produits aux
            plus grands nombre, tout en tirant un revenu supplémentaire, hors
            circuit classique.
          </li>
          <li>
            3- Ré-éduquer et sensibiliser les gens autour de ces nobles valeurs:
            “de la terre à l’assiette”.
          </li>
        </ul>
        Nous allons donc créer une plateforme e-commerce axée marketplace, sur
        laquelle les producteurs pourront proposer à la vente leurs produits, à
        des clients locaux, qui pourront soit récupérer leur commande chez le
        producteur, soit être livrés par ce dernier.
      </div>
    </div>
  );
};
export default TheConcept;
