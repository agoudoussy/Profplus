import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1>
          PROF<span>PLUS</span>
        </h1>
        <hr />
      </div>
      <div className="sidebar__link">
        <ul>
          <li>
            <a href="#">Prof</a>
          </li>
          <li>
            <a href="#">Cour</a>
          </li>
          <li>
            <a href="#">Categorie</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
