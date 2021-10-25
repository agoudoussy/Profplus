import { useState, useEffect } from "react";
import "../header/seach.css";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";

const Card = ({ profs }) => {
  return (
    <div className="container">
      {profs.map((profs, i) => (
        <div className="card" style={{ width: "18rem" }} key={i}>
          <img src={profs.urlPhoto} className="card-img-top" alt="img" />
          <div className="card-body">
            <h4>
              {profs.nom} {profs.prenom}
            </h4>
            <p>
              Cours :<span>{profs.matiere}</span>
            </p>
            <p>
              Année D'experience:<span>{profs.expYear}</span>{" "}
            </p>
            <p>
              Citation :<span>{profs.citation}</span>
            </p>
            <p>
              Tarif :<span>{profs.honoraire}</span>
            </p>
            <Link to={`/cour/${i}`} className="btn btn-dark">
              Plus de Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
