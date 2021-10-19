import { useState, useEffect } from "react";
import "./adminPane.css";
import { db, storage } from "../../firebaseConfig";
function Cour() {
  const [cours, setCours] = useState({
    cour: "",
    categorie: "",
  });
  const [cate, setCat] = useState([]);
  const found=cate.some(elem=>elem.categorie==cours.categorie);
  const addCours = (event) => {
    //supprimer l'action par defaut lors du submit dans le form
    event.preventDefault();
    console.log(found);
    if(found){
      console.log("mettre a jour la categorie de ce cours");
    }else{
      console.log("ajout d'une nouvel categorie");
    }
    console.log(cours.cour);
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
      setCat(items);
    });
  }

  function getCour() {
    db.collection("cours").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCours(items);
    });
  }

  useEffect(() => {
    getCategorie();
    getCour();
    // console.log(cate);
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
