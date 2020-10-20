import React from "react";
import "./style.scss";

const OurTeam = () => {
  return (
    <div className="body">
      <div className="team">
        <h1>La Team Chez Mon Fermier</h1>

        <div className="team__intro">
          Notre <strong>agence Chez Mon Fermier</strong> est composée d’une
          équipe professionnelle, d’expérience et dynamique.C’est ainsi que nous
          pouvons monter sur des projets conséquents en respectant des deadlines
          serrées. L’architecture et le pilotage de nos projets restent{" "}
          <strong>toujours gérés en interne</strong>.
        </div>

        <div className="team__text">
          Chaque projet Internet est une nouvelle Aventure, aussi bien pour nous
          que pour nos clients, lesquels attachent une grande importance à
          participer à l'élaboration de leur site Internet. Pour aboutir à un
          résultat optimal, chaque projet nécessite une étroite collaboration
          entre nos clients et nous et une participation de chacun par des
          échanges réguliers.
        </div>
      </div>

      <h2>Notre pôle technique</h2>

      <div className="name__team">
        <div className="jerry">
          JERRY
          <p>El patron</p>
          <img
            src="logo-app.png"
            className="logo-small jello-horizontal"
            alt="logo test"
          />
        </div>
        <div className="youssef">
          YOUSSEF
          <p>El lead dev front</p>
          <img
            src="logo-app.png"
            className="logo-small jello-horizontal"
            alt="logo test"
          />
        </div>
        <div className="tanguy">
          TANGUY
          <p>El Scrum Master</p>
          <img
            src="logo-app.png"
            className="logo-small jello-horizontal"
            alt="logo test"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
