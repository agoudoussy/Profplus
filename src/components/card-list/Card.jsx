import React from "react";
import "../header/seach.css";

const Card = (props) => {
  return (
    <div className="container">
      {props.profs.map((profs) => (
        <div className="card" style={{ width: "18rem" }} key={profs.id}>
          <img src={profs.urlphoto} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title  my-4">
              {profs.nom} {profs.prenom}
            </h5>
            <a href="/" className="btn btn-dark">
              Plus de Detail
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
