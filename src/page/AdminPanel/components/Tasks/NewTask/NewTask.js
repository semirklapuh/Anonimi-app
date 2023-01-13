import React, { useState } from "react";
import "./style.css";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Opacity, RadioButtonUnchecked } from "@mui/icons-material";
import Switch from "react-switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { RxMagnifyingGlass } from "react-icons/rx";

import DragAndDrop from "./DragAndDrop";
import PreviewTable from "./PreviewTable/PreviewTable";

let navigate = useNavigate;

const NewTask = () => {
  const [addProjectSwitch, setAddProjectSwitch] = useState(false);
  const [facesAnonimization, setFacesAnonimization] = useState(true);
  const [platesAnonimization, setPlatesAnonimization] = useState(false);

  const [fileInfo, setFileInfo] = useState([]);
  const [sizeLimitReached, setSizeLimitReached] = useState(false);

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [selectedOption, setSelectedOption] = useState("pixelated");
  const handleClickPixelated = () => {
    setSelectedOption("pixelated");
  };
  const handleClickBlur = () => {
    setSelectedOption("blur");
  };
  const handleClickDeepNetural = () => {
    setSelectedOption("deepNatural");
  };

  console.log(sizeLimitReached);

  return (
    <div className="newTask">
      <div className="newTaskBackButton">
        <div className="backNavigation">
          <div className="backArrow">
            <Link to="/home?key=2">
              <IoMdArrowBack
                style={{ height: "24px", width: "27px", color: "black" }}
              />
            </Link>
            {/* <IoMdArrowBack style={{height:"24px", width:"27px"}}/> */}
          </div>
          <div className="headlineNewTask">
            <span className="headlineText">New Task</span>
          </div>
        </div>
      </div>
      <div className="uploadTaskConfiguration">
        <div className="uploadFiles">
          <div className="uploadText">
            <span className="uploadSpan">Upload</span>
          </div>

          {/* Drag and drop */}
          {/* <div className="dragAndDropFeature">
            <div className="uploadIcon"><AiOutlineUpload style={{height:"50px", width:"50px"}}/></div>
            <div className="browse">Click to browse or drag and drop</div>
            <div className="supportedFormat">Supported formats: jpeg, jpg, png,avi, mkv... Maximum size 50 MB</div>
        </div>  */}
          <DragAndDrop
            setFileInfo={setFileInfo}
            setSizeLimitReached={setSizeLimitReached}
          />

          <div className="horizontalLine"></div>
          <div className="filesList">
            <div className="filesText">
              <span className="filesSpan">Files</span>
              {fileInfo.length !== 0 ? (
                <PreviewTable fileInfo={fileInfo} />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className="taskConfiguration">
          <div className="taskConfigurationTitle">Task configuration</div>
          <div className="taskName">
            <label>Task name</label>
            <input
              placeholder="Filename+UploadDate"
              className="taskNameInput"></input>
          </div>
          <div className="horizontalLineConfig"></div>
          <div className="addToProjectDiv">
            <div className="addToProjectText">Add to project</div>
            <div className="addToProjectDivSwitch">
              <Switch
                offColor="#D9DEE2"
                onColor="#184952"
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={14}
                width={36}
                height={18}
                checked={addProjectSwitch}
                onChange={() => {
                  setAddProjectSwitch(!addProjectSwitch);
                }}
              />
            </div>
          </div>
          <div
            className="addProjectSearch"
            style={{
              opacity: addProjectSwitch ? 1 : 0.2,
            }}>
            <div className="taskName">
              <label style={{ width: "72.5px" }}>Project</label>
              <input
                placeholder="Search projects"
                className="taskNameInput"></input>
              <RxMagnifyingGlass style={{ height: "14px", width: "14px" }} />
            </div>
          </div>
          <div className="horizontalLineConfig"></div>
          <div className="addToProjectDiv">
            <div className="addToProjectText">Face anonimization</div>
            <div className="addToProjectDivSwitch">
              <Switch
                offColor="#D9DEE2"
                onColor="#184952"
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={14}
                width={36}
                height={18}
                checked={facesAnonimization}
                onChange={() => {
                  setFacesAnonimization(!facesAnonimization);
                  setPlatesAnonimization(!platesAnonimization);
                }}
              />
            </div>
          </div>
          <div className="addToProjectDiv">
            <div className="addToProjectText">Plates anonimization</div>
            <div className="addToProjectDivSwitch">
              <Switch
                offColor="#D9DEE2"
                onColor="#184952"
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={14}
                width={36}
                height={18}
                checked={platesAnonimization}
                onChange={() => {
                  setPlatesAnonimization(!platesAnonimization);
                  setFacesAnonimization(!facesAnonimization);
                }}
              />
            </div>
          </div>
          <div className="horizontalLineConfig"></div>
          <div className="anonimiType">
            <div className="anonimiTypeTitle">Anonimization type</div>
            <div className="typeButtons">
              <button
                className="typeButton"
                onClick={handleClickPixelated}
                style={{
                  backgroundColor:
                    selectedOption === "pixelated" ? "#184952" : "white",
                  color: selectedOption === "pixelated" ? "white" : "black",
                }}>
                Pixelated
              </button>
              <button
                className="typeButton"
                onClick={handleClickBlur}
                style={{
                  backgroundColor:
                    selectedOption === "blur" ? "#184952" : "white",
                  color: selectedOption === "blur" ? "white" : "black",
                }}>
                Blur
              </button>
              <button
                className="typeButton"
                onClick={handleClickDeepNetural}
                style={{
                  backgroundColor:
                    selectedOption === "deepNatural" ? "#184952" : "white",
                  color: selectedOption === "deepNatural" ? "white" : "black",
                }}>
                Deep netural
              </button>
            </div>
          </div>
          <div className="horizontalLineConfig"></div>
          <div className="addWatermarkDiv">
            <div className="addWatermarkText">Add watermark</div>
            <div className="addToProjectDivSwitch">
              <Switch
                className="watermarkSwitch"
                offColor="#D9DEE2"
                onColor="#184952"
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={14}
                width={36}
                height={18}
                disabled={true}
                checked={false}
                onChange={() => {
                  console.log("add watermark");
                }}
              />
            </div>
          </div>
          <div className="horizontalLineConfig"></div>
          <div className="controlButtons">
            <button className="manageFilesBtn">
              <IoMdArrowBack />
              Manage files
            </button>
            <button className="createTaskBtn">Create task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
