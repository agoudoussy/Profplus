import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          PROF<span className="plus">PLUS</span>
        </h2>
      </div>
      <div className="sidebar__link">
        <ul>
        <li>
            <i className="fas fa-tachometer-alt"></i>
            <Link to="/admin">Acceuil</Link>
          </li>
          <li>
          <i className="fas fa-chalkboard-teacher"></i>
            <Link to="/admin/prof">Prof</Link>
          </li>
          <li>
             <i className="fas fa-address-book"></i>
            <Link to="/admin/cour">Cours</Link>
          </li>
          <li>
             <i className="fas fa-award"></i>
            <Link to="/admin/categorie">Categorie</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
