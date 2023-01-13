import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import MonthDropdown from "./MonthDropdown";
import YearDropDown from "./YearDropDown";
import { dataYear, date, selectData } from "./ChartData";

import "./Chart.css";

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [mode, setMode] = useState("upload");
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedYear, setSelectedYear] = useState(() => {
    return new Date().getFullYear();
  });
  const yearJoined = 2016;

  useEffect(() => {
    setChartData(() => {
      return selectData(mode, selectedYear, selectedMonth);
    });
  }, [selectedMonth, selectedYear]);

  const options = {
    curveType: "function",
    legend: "none",
    backgroundColor: "#fbfbfb",
  };

  function handleSelected1(params) {
    setMode("upload");
  }

  function handleSelected2(params) {
    setMode("api");
  }

  return (
    <div className="dashboard__chart__content">
      <p className="dashboard__chart__title">Total consumption overview</p>
      <div className="dashboard__chart__dropdowns">
        <YearDropDown
          yearJoined={yearJoined}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <MonthDropdown setSelectedMonth={setSelectedMonth} />
      </div>
      <div className="dashboard__chart">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={chartData}
          options={options}
        />
      </div>
      <div className="dashboard__chart__select">
        <p
          onClick={handleSelected1}
          className="dashboard__chart__select_p1"
          style={{ opacity: mode === "upload" ? 1 : 0.2 }}>
          Upload
        </p>
        <p
          onClick={handleSelected2}
          className="dashboard__chart__select_p2"
          style={{ opacity: mode === "api" ? 1 : 0.2 }}>
          API
        </p>
      </div>
    </div>
  );
};

export default ChartComponent;
