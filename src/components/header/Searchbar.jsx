import {useState, useEffect} from "react";
import "./seach.css";
// import { prof } from "../card-list/prof";
import Card from "../card-list/Card";
import {db} from '../../firebaseConfig';

function Searchbar(){
  const [pro, setPro] = useState({
    matiere : "",
  });
  const [prof, setProf] = useState([]);
  const ref = db.collection("prof");
  function getProf() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProf(items);
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPro((prevProf) => {
      return {
        ...prevProf,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    getProf();
    console.log(prof);
    console.log(pro.matiere);
    // eslint-disable-next-line
  }, []);
  let compte = 0;
    const {matiere} = pro;
    const filterAp = prof.filter(
      pr =>  (pr.matiere.includes(matiere)),compte++)
        
    return (
      <div>
        <div className="search-box">
          <div className="search">
            <i className="fas fa-book"></i>
            <input
              name="matiere"
              value={pro.matiere}
              type="text"
              placeholder="Matiere"
              onChange={handleChange} 
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
            <Card prof={filterAp} />
        </div>
      </div>
    );
  }
export default Searchbar;
