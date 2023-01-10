import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "./components/sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import Dashboard from "./components/Dashboard/Dashboard";
import NewTask from "./components/Tasks/NewTask/NewTask";
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
      {/* {page === 1 ? <Tasks/>:<Dashboard/>} */}
      {console.log("params values is:" + params)}
      { (() => {
                switch(params) {
                  case "1": 
                  console.log("case 1 dashboard")
                  return <Dashboard/>;
                  case "2": 
                  console.log("case 2 task")
                  return <Tasks/>;
                  case "9": 
                  console.log("case 9 newtask")
                  return <NewTask/>;
                  default: 
                  console.log("default case")
                  return <Dashboard/>;
                }
            })()}
      {/* <Tasks/> */}
      {/* <Dashboard/> */}
    </div>
  );
};

export default AdminPanel;
