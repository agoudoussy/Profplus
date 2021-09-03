import { useState, useEffect } from "react";
import "./adminPane.css";
import { db, storage } from "../../firebaseConfig";
function Cour() {
  const [cours, setCours] = useState({
    cour: "",
    categorie: "",
  });
  const [cate, setCate] = useState([]);
  const addCours = (event) => {
    //supprimer l'action par defaut lors du submit dans le form
    event.preventDefault();
    db.collection("cours").add({
      cour: cours.cour,
      categorie: cours.categorie,
    });
    setCours({
      cour: "",
      categorie: "",
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCours((prevProf) => {
      return {
        ...prevProf,
        [name]: value,
      };
    });
  };
  const ref = db.collection("categorie");
  function getCategorie() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCate(items);
    });
  }

  useEffect(() => {
    getCategorie();
    console.log(cate);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="completeCate">
      <form>
        <div className="residence_info">
          <h4 className="title_brand">
            Enregistrement des informations de Cours
          </h4>
          <div className="comlab">
            <label className="labelCat">Choisir Categorie</label>
            <select
              className="combo"
              name="categorie"
              id="categorie-select"
              value={cours.categorie}
              onChange={handleChange}
            >
            <option value="">--faite votre choix--</option>
            {cate.map((ca,i)=>
              {
                return <option key={i} value={ca.categorie}>{ca.categorie}</option>
              }
            )}
            </select>
            
          </div>
          <div className="inputSize">
            <input
              name="cour"
              placeholder="Cours"
              type="text"
              value={cours.cour}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="botumValidate" onClick={addCours}>
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cour;
