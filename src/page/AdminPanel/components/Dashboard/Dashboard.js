import React, { useState } from "react";
import "./style.css";

import CurrentMonthConsumption from "./CurrentMonthConsumption/CurrentMonthConsumption";
import UploadStatistics from "./UploadStatistics/UploadStatistics";
import APIStatus from "./APIStatus/APIStatus";
import Tasks from "./Tasks/Tasks";
import Chart from "./Chart/Chart";

const Dashboard = () => {
  const [data, setData] = useState({
    maxMonthConsumption: 1000,
    currentMonthConsumption: 666,
    singleImage: 168,
    singleVideo: 56,
    archive: 17,
    bulkUpload: 36,
    activeCalls: 23,
    TotalAPICalls: 186,
  });

  return (
    <div className="dashboard">
      <div className="dashboard__title">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard__data">
        <div className="dashboard__cards">
          <div className="dashboard__card card">
            <CurrentMonthConsumption data={data} />
          </div>
          <div className="dashboard__card card">
            <UploadStatistics data={data} />
          </div>
          <div className="dashboard__card card">
            <APIStatus data={data} />
          </div>
        </div>
        <div className="dashboard__info">
          <div className="card">
            <Chart />
          </div>
          <div className="card">
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
