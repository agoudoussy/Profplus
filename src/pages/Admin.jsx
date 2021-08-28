import React from "react";
import Sidebar from "../components/adminComponents/Sidebar";
import Content from "../components/adminComponents/Content";
import "./Admin.css"

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <Content />
    </div>
  );
}
export default Admin;
