import {useState} from 'react'
import './adminPane.css';
import { db, storage } from "../../firebaseConfig";
export default function Categorie() {
  const [cat, setCat] = useState({
    categorie: "",
  });
  const addCat = (event) => {
    //supprimer l'action par defaut lors du submit dans le form
    event.preventDefault();
    db.collection("categorie").add({
      categorie: cat.categorie
    });
    setCat({
      categorie: ""
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCat((prevProf) => {
      return {
        ...prevProf,
        [name]: value,
      };
    });
  };
    return (
        <div className="completeCate">
           <form>
           <div className="residence_info">
            <h4 className="title_brand">Enregistrement des categories</h4>
            <div className="inputSize">
              <input
                name="categorie"
                value={cat.categorie}
                onChange={handleChange}
                placeholder="categorie"
                type="text"
              />
            </div>
            <button type="submit" className="botumValidate" onClick={addCat}>
            Enregistrer
          </button>
          </div>
           </form>
        </div>
    )
}
