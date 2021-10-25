import { useState, useEffect, useRef } from "react";
import "./adminPane.css";
import { db, storage } from "../../firebaseConfig";
function Cour() {
  const [cours, setCours] = useState({
    cour: "",
    categorie: "",
  });
  const [dbCour, setDbCour] = useState([]);
  const [cate, setCat] = useState([]);
  const [docId, setDocId] = useState();
  const [newCourItems, setNewCourItems] = useState();
  const [errorMsg, setErrorMsg]=useState("");
  let courItems;
  const courRef = useRef();
  let courList;
  const items = [];
  const addCours = (event) => {
    //supprimer l'action par defaut lors du submit dans le form
    event.preventDefault();
    const catFound = dbCour.some((elem) => elem.categorie == cours.categorie);
    if (catFound) {
      courItems = dbCour
        .filter((elem) => elem.categorie == cours.categorie)
        .map((elem) => elem.cour);
      courItems.map((elem) => elem.forEach((element) => items.push(element)));
      const courFound = items.some((elem) => elem == cours.cour);
      // console.log(items)
      if (courFound) {
        setNewCourItems(items);
        console.log(items);
        setCours({
          cour:cours.cour,
          categorie:cours.categorie,
        });
        setErrorMsg(
          "Cours existant  deja dans la categorie "+cours.categorie 
        );
      } else {
        getCategorieId();
        items.push(cours.cour);
        db.collection("cours").doc(docId).update({
          cour: items,
        });
        setCours({
          cour: "",
          categorie: "",
        });
        
        // console.log("ajouter ce cours" + docId);
        setErrorMsg("Enregistreement effectué avec succès");
      }
    } else {
      insertCours();
      setErrorMsg("Enregistrement effectué avec succès");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCours((prevProf) => {
      return {
        ...prevProf,
        [name]: value,
      };
    });
    getCategorieId();
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

  function getCours() {
    db.collection("cours").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDbCour(items);
    });
  }

  function getCategorieId() {
    db.collection("cours")
      .where("categorie", "==", cours.categorie)
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          setDocId(doc.id);
        });
      });
  }
  function insertCours(){
    items.push(cours.cour)
    db.collection("cours").add({
      cour: items,
      categorie: cours.categorie
    });
    setCours({
      cour: "",
      categorie: "",
    });  
  }

  useEffect(() => {
    getCategorie();
    getCours();
  }, []);
  return (
    <div className="completeCate">
      <form onSubmit={addCours}>
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
              ref={courRef}
              required
            >
              <option value="">--faite votre choix--</option>
              {cate.map((ca, i) => {
                return (
                  <option key={i} value={ca.categorie}>
                    {ca.categorie}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="inputSize">
            <input
              name="cour"
              placeholder="Cours"
              type="text"
              value={cours.cour}
              onChange={handleChange}
              required
            />
          </div>
          <p>{setErrorMsg}</p>
          <button type="submit" className="botumValidate">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cour;
