import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/adminComponents/Sidebar";
import Content from "../components/adminComponents/Content";
import "./Admin.css";
import Profs from "../components/adminComponents/Profs";
import home from "../components/adminComponents/home";
import Cour from "../components/adminComponents/Cour";
import Categorie from "../components/adminComponents/Categorie";
function Admin() {
  return (
    <Router>
      <div className="admin">
        <Sidebar />
        <Switch>
          <Route path="/admin" exact component={home} />
          <Route path="/admin/prof" exact component={Content} />
          <Route path="/admin/cour" exact component={Cour}/>
          <Route path="/admin/categorie" exact component={Categorie}/>
        </Switch>
      </div>
    </Router>
  );
}
export default Admin;
