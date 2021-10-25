import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './PlaceSection.css';

function PlaceSection() {
    const [commune, setCommune] = useState([
      "Dixinn",
      "Kaloum",
      "Matam",
      "Matoto",
      "Ratoma",
    ]);
    return (
      <div className="place__section">
        <div className="place__left__side">
          <h3>
            Des <span>professeurs</span> tout près <br></br> de chez vous
          </h3>
          <p>
            Nous avons des professeurs présent dans les cinq (5) communes de la
            capitales
          </p>
        </div>
        <div className="place__right__side">
          {commune.map((com,index) => (
            <Link to={`/search/:${com}`} key={index}>{com}</Link>
          ))}
        </div>
      </div>
    );
}

export default PlaceSection
