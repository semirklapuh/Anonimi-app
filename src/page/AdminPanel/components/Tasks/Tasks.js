import React from "react";
import GetData from "./GetData";
import "./style.css";
import { Button, Nav } from "react-bootstrap";
import {HiOutlinePlus} from "react-icons/hi";
import {RxMagnifyingGlass} from "react-icons/rx";
import {TbAdjustmentsHorizontal} from "react-icons/tb";
import { color } from "@mui/system";
import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="topPage">
      <div className="headline"><h2>Tasks</h2></div>
      <div className="belowHeadline">
      <div className="searchNewButton">
      <div className="searchInput">
        <div className="lupa"><RxMagnifyingGlass style={{width: "20px", height: "20px"}}/></div>
        <div className="searchField"><input className="searchFilter" placeholder="Search"/></div>
        <div className="filter"><TbAdjustmentsHorizontal style={{width: "20px", height: "20px"}}/></div>
      </div>
      </div>
      <div className="newItemLink">
        <Link to="/home?key=9">
          <Button className="add-btn"> <HiOutlinePlus /> New Task</Button>
        </Link>
      </div>
      </div>
      </div>

 

      <div className="getdata-div">
        <GetData />
      </div>
    </div>
  );
};

export default Tasks;
