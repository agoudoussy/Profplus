import {useState, useEffect} from "react";
import "./seach.css";
// import { prof } from "../card-list/prof";
import Card from "../card-list/Card";
import {db} from '../../firebaseConfig';

function Searchbar(){
  const [state, setState] = useState({
    matiere : "",
  });
  const [prof, setProf] = useState([]);
  useEffect( ()=> {
    db.collection('prof').onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc=> doc.data().libelle));
      snapshot.docs.map(doc=> setProf({prof : doc.data()}),console.log(prof))
      
    })
  },[]);
    const { matiere} = state;
    let compte = 0;
    const filterApp = ()=> prof.filter(
      (pr) =>
        pr.libelle.includes(matiere.toLowerCase()) , compte++);
    return (
      <div>
        <div className="search-box">
          <div className="search">
            <i className="fas fa-book"></i>
            <input
              type="text"
              placeholder="Matiere"
              onChange={(e) => setState({ matiere: e.target.value })}
            ></input>
          </div>
          <div className="search">
            <i className="fas fa-map-marker-alt"></i>
            <input
              type="text"
              placeholder="Lieu"
              onChange={(e) => this.setState({ lieu: e.target.value })}
            ></input>
          </div>
          <div className="search">
            <i className="fas fa-graduation-cap"></i>
            <input
              type="text"
              placeholder="niveau"
              onChange={(e) => this.setState({ niveau: e.target.value })}
            ></input>
          </div>
          <button>Rechercher</button>
        </div>
        <div className="barreV"></div>
        <div className="card__section">
          <p className="person">
            {compte} Personnes <span>Trouvées</span>
          </p>
          <Card profs={filterApp} />
        </div>
      </div>
    );
  }
export default Searchbar;
