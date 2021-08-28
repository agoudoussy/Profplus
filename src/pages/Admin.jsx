import React from 'react'
import Sidebar from "../components/adminComponents/Sidebar";
import content from '../components/adminComponents/content';

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <content/>
    </div>
  );
}
  export default Admin;
