import React, { useState } from "react";
import "./style.css";

import CurrentMonthConsumption from "./CurrentMonthConsumption/CurrentMonthConsumption";
import UploadStatistics from "./UploadStatistics/UploadStatistics";
import APIStatus from "./APIStatus/APIStatus";

const Dashboard = () => {
  const [data, setData] = useState({
    maxMonthConsumption: 1000,
    currentMonthConsumption: 975,
    singleImage: 268,
    singleVideo: 56,
    archive: 17,
    bulkUpload: 36,
  });

  return (
    <div className="dashboard">
      <div className="title">
        <h2>Dashboard</h2>
      </div>
      <div className="data">
        <div className="cards">
          <div className="card">
            <CurrentMonthConsumption data={data} />
          </div>
          <div className="card">
            <UploadStatistics data={data} />
          </div>
          <div className="card">
            <APIStatus data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
