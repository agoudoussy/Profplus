import  {useState, useEffect} from "react";
import "../header/seach.css";
import { db } from "../../firebaseConfig";

const Card = (props) => {
  const [prof, setProf] = useState([]);

  useEffect( ()=> {
    db.collection('prof').onSnapshot(snapshot =>{
      console.log(snapshot.docs.map(doc=> doc.data().nom));
      setProf(snapshot.docs.map(doc=> doc.data()))
    })
  },[]);
 

  return (
    <div className="container">
      {prof.map((profs, i) => (
        <div className="card" style={{width:"18rem"}} key={i}>
            <img src={profs.urlPhoto} className="card-img-top" alt="img" />
          <div className="card-body">
            <h4>
              {profs.nom} {profs.prenom}
            </h4>
            <p>Cours :<span>{profs.matiere}</span></p>
            <p>Année D'experience:<span>{profs.expYear}</span> </p>
            <p>Citation :<span>{profs.citation}</span></p>
            <p>Tarif :<span>{profs.honoraire}</span></p>
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
