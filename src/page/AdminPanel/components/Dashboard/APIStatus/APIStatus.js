import React from "react";

import "./APIStatus.css";

const APIStatus = () => {
  return (
    <div className="ApiStatus">
      <div className="ApiStatus__title">API Status</div>
      <div className="ApiStatus__content">
        <div className="ApiStatus__leftDiv">
          <div>
            <p>Active calls</p>
            <p>(real time)</p>
          </div>
          <div>23</div>
          <div>
            <span>Parallel</span>
            <span>Sequential</span>
          </div>
        </div>
        <div className="ApiStatus__rightDiv">
          <div>
            <p>Total API calls</p>
            <p>(current month)</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="ApiStatus__status">Active</div>
    </div>
  );
};

export default APIStatus;
