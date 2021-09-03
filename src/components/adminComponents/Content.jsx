import React, { useState } from "react";
import AdminHead from "./AdminHead";
import "./Content.css";
import { db, storage } from "../../firebaseConfig";
// import useStorage from "./useStorage";

function Content() {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const types = ["image/jpeg", "image/png"];
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(null);
  const [prof, setProf] = useState({
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    urlPhoto: "",
    commune: "",
    quartier: "",
    matiere: "",
    niveau: "",
    presentation: "",
    expPro: "",
    expSoc: "",
    citation: "",
    honoraire: "",
    expYear: "",
  });
  //fonction qui ajoute un prof dans la bd firebase
  const addProf = (event) => {
    //supprimer l'action par defaut lors du submit dans le form
    event.preventDefault();
    db.collection("prof").add({
      nom: prof.nom,
      prenom: prof.prenom,
      tel: prof.tel,
      email: prof.email,
      urlPhoto: url,
      commune: prof.commune,
      quartier: prof.quartier,
      matiere: prof.matiere,
      niveau: prof.niveau,
      presentation: prof.presentation,
      expPro: prof.expPro,
      expSoc: prof.expSoc,
      citation: prof.citation,
      honoraire: prof.honoraire,
      expYear: prof.expYear,
    });
    setProf({
      nom: "",
      prenom: "",
      tel: "",
      email: "",
      urlPhoto: "",
      commune: "",
      quartier: "",
      matiere: "",
      niveau: "",
      presentation: "",
      expPro: "",
      expSoc: "",
      citation: "",
      honoraire: "",
      expYear: "",
    });
    setUrl("");
  };

  //fonction qui reagit au changement de l'input
  const handleChange = (event) => {
    const { name, value } = event.target;
    //le prevprof est un object qui contient l'objet prof initial
    //ensuite on copie le contenu de ce tableau ensuite on l'ajoute les nouvels valeurs
    setProf((prevProf) => {
      return {
        ...prevProf,
        [name]: value,
      };
    });
  };

  function uploadAction(file) {
    const uploadTask = storage.ref(`images/${file.name}`);
    uploadTask.put(file).on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  }

  //fonction qui gère l'upload d'une image
  const handleUpload = (event) => {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
      uploadAction(selectedFile);
      console.log(progress);
    } else {
      setFile("");
      setError("format non supporter");
    }
  };

  return (
    <div className="admin-content">
      <AdminHead />
      <div className="prof-content">
        <h4>Ajouter un professeur</h4>
        {error && <div>{error}</div>}
        <form>
          <div className="generalB">
            <div className="personal__info">
              <h4 className="title_brand">Information Personnelle</h4>
              <div className="inputSize">
                <input
                  name="nom"
                  value={prof.nom}
                  onChange={handleChange}
                  placeholder="nom"
                  type="text"
                />
              </div>
              <div className="inputSize">
                <input
                  name="prenom"
                  value={prof.prenom}
                  onChange={handleChange}
                  placeholder="prenom"
                  type="text"
                />
              </div>
              <div className="inputSize">
                <input
                  name="tel"
                  value={prof.tel}
                  onChange={handleChange}
                  placeholder="telephone"
                  type="text"
                />
              </div>
              <div className="inputSize">
                <input
                  name="email"
                  value={prof.email}
                  onChange={handleChange}
                  placeholder="email"
                  type="email"
                />
              </div>
            </div>
            <div className="profile">
              <input
                name="urlPhoto"
                onChange={handleUpload}
                value={prof.urlPhoto}
                type="file"
                id="input-file"
              />
              <label for="input-file">
                <i></i>Choisir une Image
              </label>
              <label name="file-choosen">{file ? url : "..."}</label>
              {file && <div className="progress" style={{width:progress + '%'}}></div>}
            </div>
          </div>
          <div className="residence_info">
            <h4 className="title_brand">Information Residentielle</h4>
            <div className="inputSize">
              <select
                className="drop-down"
                name="commune"
                onChange={handleChange}
                value={prof.commune}
              >
                <option value="Dixinn">Veuillez Choisir votre commune</option>
                <option value="Dixinn">Dixinn</option>
                <option value="Kaloum">Kaloum</option>
                <option value="Matam">Matam</option>
                <option value="Matoto">Matoto</option>
                <option value="Ratoma">Ratoma</option>
              </select>
            </div>

            <div className="inputSize">
              <input
                name="quartier"
                value={prof.quartier}
                onChange={handleChange}
                placeholder="Quartier"
                type="text"
              />
            </div>
          </div>
          <div className="pedagogie-info">
            <h4 className="title_brand">Information Pédagogique</h4>
            <div className="inputSize">
              <select className="drop-down" name="matiere" value={prof.matiere} onChange={handleChange}>
              <option value="Dixinn">Veuillez Choisir le cour</option>
                <option value="Html/css">Html/css</option>
                <option value="Html/css">HTMl/css</option>
              </select>
            </div>
            <div className="inputSize">
              <select className="drop-down" name="niveau" value={prof.niveau} onChange={handleChange}>
              <option value="Dixinn">Veuillez Choisir le Niveau</option>
                <option value="Primaire">Primaire</option>
                <option value="Collège">Collège</option>
                <option value="Lycée">Lycée</option>
              </select>
            </div>
          </div>
          <div className="profosional_info">
            <h4 className="title_brand">Information Professionelle</h4>
            <div className="text__area">
              <textarea
                name="presentation"
                value={prof.presentation}
                onChange={handleChange}
                placeholder="Presentation"
              />
            </div>
            <div className="text__area">
              <textarea
                name="expPro"
                value={prof.expPro}
                onChange={handleChange}
                placeholder="experience profossionelle"
              />
            </div>
            <div className="text__area">
              <textarea
                name="expSoc"
                value={prof.expSoc}
                onChange={handleChange}
                placeholder="experience social"
              />
            </div>
            <div className="text__area">
              <textarea
                name="honoraire"
                value={prof.honoraire}
                onChange={handleChange}
                placeholder="cout Horaire"
              />
            </div>
            <div className="inputSize">
              <input
                name="citation"
                value={prof.citation}
                onChange={handleChange}
                placeholder="citation"
                type="text"
              />
            </div>
            <div className="inputSize">
              <input
                name="expYear"
                value={prof.expYear}
                onChange={handleChange}
                placeholder="Annee d'experience"
                type="text"
              />
            </div>
          </div>
          <button type="submit" className="botumValidate" onClick={addProf}>
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Content;
