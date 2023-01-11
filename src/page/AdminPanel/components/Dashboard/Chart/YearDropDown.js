import React, { useState, useEffect } from "react";

const YearDropDown = ({ yearJoined, setSelectedYear, selectedYear }) => {
  const currentYear = new Date().getFullYear();
  const [years, setYears] = useState([]);

  useEffect(() => {
    for (let index = yearJoined; index <= currentYear; index++) {
      setYears((prev) => {
        return [...prev, index];
      });
    }
  }, []);

  function onYearChange(e) {
    setSelectedYear(e.target.value);
  }

  return (
    <div>
      <label className="dashboard__chart__label" htmlFor="YearDropdown">
        Year
      </label>
      <select
        value={selectedYear}
        id="YearDropdown"
        className="dashboard__chart__dropdown"
        onChange={onYearChange}>
        {years.map((value, index, array) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default YearDropDown;
