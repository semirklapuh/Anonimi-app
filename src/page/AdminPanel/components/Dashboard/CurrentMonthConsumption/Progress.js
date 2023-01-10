import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = ({ data }) => {
  const [consumption, setConsumption] = useState();

  useEffect(() => {
    setConsumption(() => {
      return (data.currentMonthConsumption / data.maxMonthConsumption) * 100;
    });
  }, []);

  return (
    <div>
      <ProgressBar
        now={consumption}
        className="wrapper"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName="label"
      />
    </div>
  );
};

export default Progress;
