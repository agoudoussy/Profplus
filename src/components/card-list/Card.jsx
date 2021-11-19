import { useState, useEffect } from "react";
import "../header/seach.css";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ profs }) => {
  return (
    <div className="card-container">
      {profs.map((profs, i) => (
      <div className="card-course" key={profs.id}>
        <div className="card-imge">
          <img src={profs.urlPhoto} alt="" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom-l1">
            <p className="matiere">
              <i className="fas fa-award"></i>
              {profs.matiere}
            </p>
            <p className="exp">Experience:{profs.expYear}</p>
          </div>
          <hr />
          <p className="nom">{profs.nom + " " + profs.prenom}</p>
          <div className="card-bottom-l3">
            <p className="honoraire">
              <i className="fas fa-history"></i>
              {profs.honoraire}
            </p>
            <Link to={`/search/${profs.id}`} className="details">voir plus</Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Card;
