import React from "react";

const MonthDropdown = ({ setSelectedMonth }) => {
  function onChange(e) {
    setSelectedMonth(e.target.value);
  }

  return (
    <div>
      <label htmlFor="MonthDropdown" className="dashboard__chart__label">
        Month
      </label>
      <select
        id="MonthDropdown"
        onChange={onChange}
        className="dashboard__chart__dropdown">
        <option value="Month">Month</option>
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
        <option value="May">May</option>
        <option value="Jun">Jun</option>
        <option value="Jul">Jul</option>
        <option value="Aug">Aug</option>
        <option value="Sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="Nov">Nov</option>
        <option value="Dec">Dec</option>
      </select>
    </div>
  );
};

export default MonthDropdown;
