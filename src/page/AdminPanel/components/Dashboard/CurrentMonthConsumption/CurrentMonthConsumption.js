import React from "react";
import Progress from "./Progress";

import "./CurrentMonthConsumption.css"

const CurrentMonthConsumption = ({ data }) => {
  return (
    <div>
      <div className="card__title">Current month consumption</div>
      <div className="card__consumption">
        <span className="card__currentData">
          {data.currentMonthConsumption}
        </span>
        /<span className="card__maxData">{data.maxMonthConsumption} MB</span>
      </div>
      <div className="card__progressBar">
        <Progress data={data} />
      </div>
      <div className="card__MB_left">
        {data.maxMonthConsumption - data.currentMonthConsumption} MB left
      </div>
    </div>
  );
};

export default CurrentMonthConsumption;
