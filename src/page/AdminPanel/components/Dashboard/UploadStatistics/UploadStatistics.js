import React, { useState } from "react";
import "./UploadStatistics.css";

// import { Chart } from "react-google-charts";
import { PieChart } from "react-minimal-pie-chart";

const UploadStatistics = ({ data }) => {
  const testData = [
    { title: "Single Image", value: 268, color: "#C6F985" },
    { title: "Single Video", value: 56, color: "#4EC8C0" },
    { title: "Archive", value: 17, color: "#184952" },
    { title: "Bulk upload", value: 36, color: "#0E262D" },
  ];

  return (
    <div className="uploadStatistics">
      <div className="uploadStatistics__title">Upload statistics</div>
      <div className="uploadStatistics__data">
        <div className="uploadStatistics__chart">
          <PieChart
            data={testData}
            labelPosition={70}
            lengthAngle={360}
            lineWidth={15}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            labelStyle={{ fontSize: "8px" }}
          />
        </div>
        <div className="uploadStatistics__data2">
          <div className="uploadStatistics__data3">
            <div className="uploadStatistics__name">
              <span class="dot1"></span>
              <p>Single image</p>
            </div>
            <p>{data.singleImage}</p>
          </div>
          <div className="uploadStatistics__data3">
            <div className="uploadStatistics__name">
              <span class="dot2"></span>
              <p>Single video</p>
            </div>
            <p>{data.singleVideo}</p>
          </div>
          <div className="uploadStatistics__data3">
            <div className="uploadStatistics__name">
              <span class="dot3"></span>
              <p>Archive</p>
            </div>

            <p>{data.archive}</p>
          </div>
          <div className="uploadStatistics__data3">
            <div className="uploadStatistics__name">
              <span class="dot4"></span>
              <p>Bulk upload</p>
            </div>

            <p>{data.bulkUpload}</p>
          </div>
        </div>
      </div>
      <div className="uploadStatistics__total">Total Tasks: 377</div>
    </div>
  );
};

export default UploadStatistics;
