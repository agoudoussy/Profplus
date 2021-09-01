import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/adminComponents/Sidebar";
import Content from "../components/adminComponents/Content";
import "./Admin.css";
import Profs from "../components/adminComponents/Profs";
function Admin() {
  return (
    <Router>
      <div className="admin">
        <Sidebar />
        <Switch>
          <Route to="/admin">
              <Content/>
          </Route>
          <Route to="/admin/prof">
              <Profs/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
export default Admin;
