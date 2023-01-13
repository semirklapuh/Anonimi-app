import React from "react";
import GetData from "../../Tasks/GetData";

import "./Tasks.css";

const Tasks = () => {
  return (
    <div className="dashboard__tasks">
      <p className="dashboard__tasks__title">Last 10 tasks</p>
      <div className="dashboard__tasks__table">
        <GetData dashboard={true} />
      </div>
    </div>
  );
};

export default Tasks;
