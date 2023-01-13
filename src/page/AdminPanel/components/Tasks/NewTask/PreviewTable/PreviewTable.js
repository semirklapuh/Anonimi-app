import React from "react";
import TableRow from "./TableRow";

import "./PreviewTable.css";

const PreviewTable = ({ fileInfo }) => {
  let test = 0;

  fileInfo.map((value, index, array) => {
    test += value.fileSize;
  });

  console.log(test);

  return (
    <div className="PreviewTable">
      <div className="PreviewTable__legend">
        <div className="TableRow__preview">Preview</div>
        <div className="TableRow__filename">File name</div>
        <div className="TableRow__size">Size</div>
        <div className="TableRow__status">Status</div>
        <div className="TableRow__cancelButton">cancel button</div>
      </div>
      <div className="PreviewTable__content">
        {fileInfo.map((value, index, array) => {
          return <TableRow key={index} rowData={value} />;
        })}
      </div>
    </div>
  );
};

export default PreviewTable;
