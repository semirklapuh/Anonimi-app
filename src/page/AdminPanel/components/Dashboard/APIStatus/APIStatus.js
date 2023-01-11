import React from "react";

import "./APIStatus.css";

const APIStatus = ({ data }) => {
  return (
    <div className="ApiStatus">
      <div className="ApiStatus__title">API Status</div>
      <div className="ApiStatus__content">
        <div className="ApiStatus__leftDiv">
          <div>
            <p>Active calls</p>
            <p className="ApiStatus__realTime">(real time)</p>
          </div>
          <div className="ApiStatus__number">{data.activeCalls}</div>
          <div className="ApiStatus__PS">
            <p className="ApiStatus__Parallel">Parallel</p>
            <p className="ApiStatus__Sequential">Sequential</p>
          </div>
        </div>

        <div className="ApiStatus__rightDiv">
          <div className="ApiStatus__rightDiv__content">
            <p>Total API calls</p>
            <p className="ApiStatus__realTime">(current month)</p>
          </div>
          <div className="ApiStatus__rightDiv_number">{data.TotalAPICalls}</div>
        </div>
      </div>

      <div className="ApiStatus__status">
        <div className="ApiStatus__status_content">
          <p className="ApiStatus__status_p">Active</p>
          <span className="dotAPIstatus"></span>
        </div>
      </div>
    </div>
  );
};

export default APIStatus;
