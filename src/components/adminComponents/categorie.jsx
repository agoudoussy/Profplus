import { useState, useEffect, useRef } from "react";
import "./adminPane.css";
import { db, storage } from "../../firebaseConfig";
import { getData } from "../../utils/FetchData";

export default function Categorie() {
  const [existCategorie, setExistCategorie] = useState([]);
  const [cat, setCat] = useState("");
  const [errorMsg, seterroMsg] = useState(false);
  const catRef = useRef();
  const found=existCategorie.some(
    (element) => element.categorie === catRef.current.value
  );
  //Add categorie to the database
  const addCat = (event) => {
    //supprimer l'action par defaut lors du submit dans le form
    event.preventDefault();
    console.log(catRef.current.value);
    // setFound()
    if (found) {
      seterroMsg("categorie deja existant");
    } else {
      db.collection("categorie").add({
        categorie: catRef.current.value,
      });
      setCat("");
      console.log("inserer un nouveau");
    }
  };

  // handle changes inside the input and hold value inside the state
  const handleChange = (event) => {
    setCat(event.target.value);
    if (event.target.value.length == 0) {
      seterroMsg("");
    }
  };

  const ref = db.collection("categorie");
  function getCategorie() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setExistCategorie(items);
    });
  }

  useEffect(() => {
    getCategorie();
  }, []);
  return (
    <div className="completeCate">
      <form onSubmit={addCat}>
        <div className="residence_info">
          <h4 className="title_brand">Enregistrement des categories</h4>
          <div className="inputSize">
            <input
              name="categorie"
              value={cat}
              onChange={handleChange}
              placeholder="categorie"
              type="text"
              ref={catRef}
            />
            <p className="errorMsg">{errorMsg}</p>
          </div>
          <button type="submit" className="botumValidate">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
