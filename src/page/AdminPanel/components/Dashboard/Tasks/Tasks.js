import React from "react";
import GetData from "../../Tasks/GetData";

import "./Tasks.css"

const Tasks = () => {
  return (
    <div className="dashboard__tasks">
      <p className="dashboard__tasks__title">Last 10 tasks</p>
      <GetData dashboard={true} />
    </div>
  );
};

export default Tasks;
