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
      {prof.map((profs) => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={profs.urlphoto} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title  my-4">
              {profs.nom} {profs.prenom}
             <p/>
              {profs.expYear}
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
