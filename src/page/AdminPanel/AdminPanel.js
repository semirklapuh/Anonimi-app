import React from "react";
import "./style.css";
import Sidebar from "./components/sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div>
        <Sidebar />
      </div>
      {/* { <div>
        <Tasks />
      </div> } */}
      <Tasks/>
    </div>
  );
};

export default AdminPanel;
