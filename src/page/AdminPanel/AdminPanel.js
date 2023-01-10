import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "./components/sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import Dashboard from "./components/Dashboard/Dashboard"
import {
  useLocation,
  useSearchParams
} from 'react-router-dom';

const AdminPanel = () => {
  const [search, setSearch] = useSearchParams();
  const [params, setParams]= useState(null)
  const [page, setPage] = useState(1);
  const handleTitle = (event) => {
    setSearch({ value: event.target.value });
  };

  const location = useLocation();
  useEffect(()=>{
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("key");
    console.log("Semir "+ singleValue)
    if(!singleValue) return
    setParams(singleValue);
  })
 

  return (
    <div className="admin-panel">
      <div>
        <Sidebar />
      </div>
      { (() => {
                switch(params) {
                  case "1": 
                  console.log("case 1 dashboard")
                  return <Dashboard/>;
                  case "2": 
                  console.log("case 2 task")
                  return <Tasks/>;
                  default: 
                  console.log("default case")
                  return <Dashboard/>;
                }
            })()}
    </div>
  );
};

export default AdminPanel;
