import React from "react";
import GetData from "./GetData";
import "./style.css";
import { Button, Nav } from "react-bootstrap";
import {HiOutlinePlus} from "react-icons/hi";
import {RxMagnifyingGlass} from "react-icons/rx";
import {TbAdjustmentsHorizontal} from "react-icons/tb";
import { color } from "@mui/system";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="headline"><h2>Tasks</h2></div>
      <div className="searchNewButton">
      <div className="searchInput">
        <div className="lupa"><RxMagnifyingGlass style={{width: "20px", height: "20px"}}/></div>
        <div className="searchField"><input className="searchFilter" placeholder="Search"/></div>
        <div className="filter"><TbAdjustmentsHorizontal style={{width: "20px", height: "20px"}}/></div>
      </div>
      <div className="newItemLink">
        <Nav.Link href="#">
          <Button className="add-btn"> <HiOutlinePlus /> New Task</Button>
        </Nav.Link>
      </div>
      </div>

 

      <div className="getdata-div">
        <GetData />
      </div>
    </div>
  );
};

export default Tasks;
