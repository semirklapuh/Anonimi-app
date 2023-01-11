import React, { useState, useEffect } from "react";
import "./UploadStatistics.css";

// import { Chart } from "react-google-charts";
import { PieChart } from "react-minimal-pie-chart";

const UploadStatistics = ({ data }) => {
  const testData = [
    { title: "Single Image", value: data.singleImage, color: "#C6F985" },
    { title: "Single Video", value: data.singleVideo, color: "#4EC8C0" },
    { title: "Archive", value: data.archive, color: "#184952" },
    { title: "Bulk upload", value: data.bulkUpload, color: "#0E262D" },
  ];

  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    setTotalTasks(() => {
      return (
        data.singleImage + data.singleVideo + data.archive + data.bulkUpload
      );
    });
  }, []);

  return (
    <div className="uploadStatistics">
      <div className="uploadStatistics__title">Upload statistics</div>
      <div className="uploadStatistics__data">
        <div className="uploadStatistics__chart">
          <PieChart
            data={testData}
            labelPosition={75}
            lengthAngle={360}
            lineWidth={15}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            labelStyle={{ fontSize: "8px" }}
          />
        </div>
        <div className="uploadStatistics__data2">
          <div className="uploadStatistics__data3">
            <div className="uploadStatistics__name">
              <span className="dot1"></span>
              <p>Single image</p>
            </div>
            <p>{data.singleImage}</p>
          </div>
          <div className="uploadStatistics__data3">
            <div className="uploadStatistics__name">
              <span className="dot2"></span>
              <p>Single video</p>
            </div>
            <p>{data.singleVideo}</p>
          </div>
          <div className="uploadStatistics__data3">
            <div className="uploadStatistics__name">
              <span className="dot3"></span>
              <p>Archive</p>
            </div>

            <p>{data.archive}</p>
          </div>
          <div className="uploadStatistics__data3">
            <div className="uploadStatistics__name">
              <span className="dot4"></span>
              <p>Bulk upload</p>
            </div>

            <p>{data.bulkUpload}</p>
          </div>
        </div>
      </div>
      <div className="uploadStatistics__total">Total Tasks: {totalTasks}</div>
    </div>
  );
};

export default UploadStatistics;
