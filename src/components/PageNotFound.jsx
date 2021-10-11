import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MenuBar from "./MenuBar";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <MenuBar />
      <div className="page-not-found-center__content">
        <i className="fas fa-quote-right fa-1x"></i>
        <h1>404</h1>
        <h5>Page non Trouvé</h5>
        <Link to="/">
          <span>Retour a l'acceuil</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;
