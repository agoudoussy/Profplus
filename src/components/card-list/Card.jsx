import  {useState, useEffect} from "react";
import "../header/seach.css";
import { db } from "../../firebaseConfig";

const Card = (props) => {
  const [prof, setProf] = useState([]);

  useEffect( ()=> {
    db.collection('prof').onSnapshot(snapshot =>{
      setProf(snapshot.docs.map(doc=> doc.data()))
    })
  },[]);
 

  return (
    <div className="container">
      {prof.map((profs,i) => (
        <div className="card" style={{ width: "18rem" }} key={i}>
          <img src={profs.urlPhoto} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title  my-4">
              {profs.nom} {profs.prenom}
              <p>Cours :{profs.libelle}</p>
              <p>Année D'experience {profs.expYear}</p>
              <p>Citation :{profs.citation}</p>
              <p>Tarif :{profs.honoraire}</p>
              
            </h5>
            <a href="/cour" className="btn btn-dark">
              Plus de Detail
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
