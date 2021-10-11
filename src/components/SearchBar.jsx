import {useState, useEffect} from 'react'
import { NavLink,Link } from 'react-router-dom';

function SearchBar() {

  const [searche, setsearch] = useState(
    {
      mat : "",
      lieu: "",
      niv : "",
    }
  );

  useEffect(()=>{
    localStorage.setItem("research", JSON.stringify(searche));
  })
    return (
      <div className="search__bar px-0">
        <div className="inputBar ">
          <i className="fas fa-book "></i>
          <input placeholder="Matière" onChange={e=> setsearch({
              mat : e.target.value,
          })} />
        </div>
        <div className="inputBar ">
          <i className="fas fa-map-marker-alt "></i>
          <input placeholder="Lieu" onChange={e=> setsearch({
            ...searche,
            lieu : e.target.value,
          })}/>
        </div>
        <div className="inputBar">
          <i className="fas fa-graduation-cap "></i>
          <input placeholder="Niveau" onChange={e=> setsearch({
            ...searche,
            niv : e.target.value,
          })} />
        </div>
        <Link to="/search">Rechercher</Link>
      </div>
    );
}

export default SearchBar
