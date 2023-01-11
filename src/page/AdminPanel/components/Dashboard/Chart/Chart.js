import React, { useState } from "react";
import { Chart } from "react-google-charts";
import MonthDropdown from "./MonthDropdown";
import YearDropDown from "./YearDropDown";

import "./Chart.css";

const ChartComponent = () => {
  const [selected, setSelected] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedYear, setSelectedYear] = useState(() => {
    return new Date().getFullYear();
  });
  const yearJoined = 2016;
  const data = [
    ["Year", "MB used"],
    ["Jan", 1000],
    ["Feb", 1170],
    ["Mar", 660],
    ["Apr", 1030],
    ["May", 1330],
    ["Jun", 630],
    ["Jul", 220],
    ["Aug", 630],
    ["Sep", 1330],
    ["Oct", 630],
    ["Nov", 1330],
    ["Dec", 630],
  ];
  const options = {
    curveType: "function",
    legend: "none",
  };

  function handleSelected1(params) {
    setSelected(1);
  }

  function handleSelected2(params) {
    setSelected(2);
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
          data={data}
          options={options}
        />
      </div>
      <div className="dashboard__chart__select">
        <p
          onClick={handleSelected1}
          className="dashboard__chart__select_p1"
          style={{ opacity: selected === 1 ? 1 : 0.2 }}>
          Upload
        </p>
        <p
          onClick={handleSelected2}
          className="dashboard__chart__select_p2"
          style={{ opacity: selected === 2 ? 1 : 0.2 }}>
          API
        </p>
      </div>
    </div>
  );
};

export default ChartComponent;
