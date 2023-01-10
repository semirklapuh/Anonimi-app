import React from "react";
import "./style.css";
import {IoMdArrowBack} from "react-icons/io";
import {AiOutlineUpload} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


let navigate = useNavigate;

const NewTask = () => {
  return (
   <div className="newTask">
    <div className="newTaskBackButton">
        <div className="backNavigation">
            <div className="backArrow">
            <Link to="/home?key=2"><IoMdArrowBack style={{height:"24px", width:"27px", color:"black"}}/></Link>
                {/* <IoMdArrowBack style={{height:"24px", width:"27px"}}/> */}
            </div>
            <div className="headlineNewTask"><span className="headlineText">New Task</span></div>
        </div>
    </div>
    <div className="uploadTaskConfiguration">
    <div className="uploadFiles">
        <div className="uploadText">
        <span className="uploadSpan">Upload</span>
        </div>
        <div className="dragAndDropFeature">
            <div className="uploadIcon"><AiOutlineUpload style={{height:"50px", width:"50px"}}/></div>
            <div className="browse">Click to browse or drag and drop</div>
            <div className="supportedFormat">Supported formats: jpeg, jpg, png,avi, mkv... Maximum size 50 MB</div>
        </div>
        <div className="horizontalLine"></div>
        <div className="filesList">
        <div className="filesText">
        <span className="filesSpan">Files</span>
        </div>
        </div>
    </div>
    <div className="taskConfiguration">
        <div className="taskConfigurationTitle">Task configuration</div>
        <div className="taskName">
            <label>Task name</label>
            <input placeholder="Filename+UploadDate" className="taskNameInput"></input>
        </div>
        <div className="horizontalLineConfig"></div>
    </div>
    </div>
   </div>
  );
};

export default NewTask;
