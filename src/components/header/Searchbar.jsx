import { useState, useEffect } from "react";
import "./seach.css";
// import { prof } from "../card-list/prof";
import Card from "../card-list/Card";
import { db } from "../../firebaseConfig";
import { useParams } from "react-router";
import Pagination from "@mui/material/Pagination";
import { Box, CssBaseline, Container, Typography } from "@mui/material";
function Searchbar(props) {
  /* State declarations part */
  const [prof, setProf] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [hideComBtn, setHideComBtn]=useState(false);
  const readValue = () => {
    const data = localStorage.getItem("research");
    if (data) {
      setPro(JSON.parse(data));
    } else {
      console.log("vide");
    }
  };
  const ref = db.collection("prof");
  const items = [];
  const item = [];
  let { undefined } = props.matiere;
  const [pro, setPro] = useState({
    mat: "",
    lieu: "",
    niv: "",
    isfilter: false,
    isTyping : false,
  });
  const [location, setLocation] = useState(undefined);

  /* State declarations part */
  useEffect(() => {
    location ? getProfFilter() : getProf();
    readValue();
    
  }, []);
  //recuperer all prof information
  const getProf =()=> {
    ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProf(items);
    });
  }
  //Filtre des professeurs par commune
  function getProfFilter() {
    ref
      .where("commune", "==", `${location.slice(1, location.length)}`)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          item.push(doc.data());
        });
        setProf(item);
      });
  }
  
  //detecter le changement des valeurs dans les inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPro((prevProf) => {
      return {
        ...prevProf,
        [name]: value,
        isfilter: true,
        isTyping: true,
      };
    });
  };

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = prof.slice(pagesVisited, pagesVisited + usersPerPage);

  const { mat, lieu, niv } = pro;
  const filterAp = displayUsers.filter(
    (pr) =>
      pr.matiere.includes(mat) &
      pr.commune.includes(lieu) &
      pr.niveau.includes(niv)
  );

//remove commune filter fonction
 const removeFilter = () => {
    getProf();
  setHideComBtn(true);
 };

  let compte = filterAp.length;

  const pageCount = Math.ceil(prof.length / usersPerPage);

  const pageCountfilter = Math.ceil(compte / usersPerPage);

  /* SearchBar Componenets part */
  return (
    <div>
      <Typography>
        <div className="search-box">
          <div className="search">
            <i className="fas fa-book"></i>
            <input
              name="mat"
              value={mat}
              type="text"
              placeholder="Matiere"
              onChange={handleChange}
            ></input>
          </div>
          <div className="search">
            <i className="fas fa-map-marker-alt"></i>
            <input
              name="lieu"
              type="text"
              placeholder="Lieu"
              onChange={handleChange}
              value={lieu}
            ></input>
          </div>
          <div className="search">
            <i className="fas fa-graduation-cap"></i>
            <input
              name="niv"
              type="text"
              placeholder="niveau"
              onChange={handleChange}
              value={niv}
            ></input>
          </div>
          <button>Rechercher</button>
        </div>
        <div className="barreV"></div>
        <div className="card__section">
          <p className="person">
            {compte} Personnes <span>Trouvées</span>
          </p>
          <div className="filterAdd">
            {location && (
              <span style={{display:`${hideComBtn&&"none"}`}}>
                {location && location.slice(1, location.length)}
                <i onClick={removeFilter} className="fas fa-times"></i>
              </span>
            )}
          </div>
          <div className="loading">
            <i
              className={`fas fa-circle-notch fa-2x loading__circle__active ${
                displayUsers.length !== 0 ? " loading__circle" : <p>Aucune donnée retournée</p>
              }`}
            ></i>
            {pro.isfilter && prof.length !== 0 ? (
              <Card profs={filterAp} />
            ) : (
              <Card profs={displayUsers} />
            )}
            <Container
              className="d-flex justify-content-center"
              component={Box}
              py={3}
            >
              <Pagination
                count={pro.isTyping ? pageCountfilter : pageCount}
                variant="outlined"
                shape="rounded"
                onChange={(e, value) => setPageNumber(value - 1)}
              />
            </Container>
          </div>
        </div>
      </Typography>
      <CssBaseline />
    </div>
  );
}
export default Searchbar;
