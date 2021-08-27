import React from "react";
import "./seach.css";
export default function Navbar() {
  return (
    <div className="container-fluid contain">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand mx-5" href="/" style={{ color: "#f38d26" }}>
          PROF<span>PLUS</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  menu">
              <a className="nav-link mx-4" href="/">
                Savoir+
              </a>
            </li>
            <li className="nav-item menu">
              <a href="/" className="nav-link mx-4">
                Cours+
              </a>
            </li>
            <li className="nav-item menu">
              <a href="/" className="nav-link mx-4">
                Competence+
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
