import React from "react";
import './DetailLeft.css'
function DetailLeft() {
  return (
    <div className="detail__left">
      <div className="top">
        <h3>Matière enseignés</h3>
        <hr />
        <div className="libelle">
          <i className="fa fa-home"></i>
          <p>Libelle matière</p>
        </div>
      </div>
      <div className="bottom">
        <h3>Niveau</h3>
        <hr />
        <div className="libelle">
          <i className="fa fa-home"></i>
          <p>Libelle niveau</p>
        </div>
      </div>
    </div>
  );
}

export default DetailLeft;
