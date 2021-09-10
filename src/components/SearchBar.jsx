import React from 'react'
import { NavLink,Link } from 'react-router-dom';

function SearchBar() {
    return (
      <div className="search__bar px-0">
        <div className="inputBar ">
          <i className="fas fa-book "></i>
          <input placeholder="Matière" />
        </div>
        <div className="inputBar ">
          <i className="fas fa-map-marker-alt "></i>
          <input placeholder="Lieu" />
        </div>
        <div className="inputBar">
          <i className="fas fa-graduation-cap "></i>
          <input placeholder="Niveau" />
        </div>
        <Link to="/search">Rechercher</Link>
      </div>
    );
}

export default SearchBar
