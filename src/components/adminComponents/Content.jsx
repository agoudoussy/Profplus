import React from "react";
import AdminHead from "./AdminHead";
import "./Content.css";

function content() {
  return (
    <div className="admin-content">
      <AdminHead />
      <div className="prof-content">
        <div className="generalB">
          <div className="personal__info">
            <h4 className="title_brand">Information Personnelle</h4>
            <div className="inputSize">
              <input placeholder="nom" type="text" />
            </div>
            <div className="inputSize">
              <input placeholder="prenom" type="text" />
            </div>
            <div className="inputSize">
              <input placeholder="telephone" type="text" />
            </div>
            <div className="inputSize">
              <input placeholder="email" type="text" />
            </div>
          </div>
          <div className="profile">
            <input type="file" />
          </div>
        </div>
        <div className="residence_info">
          <h4 className="title_brand">Information Residentielle</h4>
          <div className="inputSize">
            <input placeholder="categorie" type="text" />
          </div>
          <div className="inputSize">
            <input placeholder="libellé" type="text" />
          </div>
          <button className="botumValidate">Enregistrer</button>
        </div>
        <div className="profosional_info">
          <h4 className="title_brand">Information Profossionelle</h4>
          <div className="text__area">
            <textarea placeholder="Presentation" />
          </div>
          <div className="text__area">
            <textarea placeholder="experience profossionelle" />
          </div>
          <div className="text__area">
            <textarea placeholder="experience social" />
          </div>
          <div className="text__area">
            <textarea placeholder="citation" />
          </div>
          <div className="inputSize">
            <input placeholder="cout Horaire" type="text" />
          </div>
          <div className="inputSize">
            <input placeholder="Annee d'experience" type="text" />
          </div>
          <button className="botumValidate">Enregistrer</button>
        </div>
      </div>
    </div>
  );
}

export default content;
