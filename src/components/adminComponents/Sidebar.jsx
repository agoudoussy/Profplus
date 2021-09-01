import React from "react";
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
            <a href="/admin">Acceuil</a>
          </li>
          <li>
          <i className="fas fa-chalkboard-teacher"></i>
            <a href="/admin/prof">Prof</a>
          </li>
          <li>
             <i className="fas fa-address-book"></i>
            <a href="/admin/cour">Cour</a>
          </li>
          <li>
             <i className="fas fa-award"></i>
            <a href="/admin/categorie">Categorie</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
