import React, { useState } from "react";
import ImageHoverPreview from "./ImageHoverPreview";
import "./TableRow.css";

const TableRow = ({ rowData }) => {
  const [hover, setHover] = useState(false);
  const imageSrc = `data:image/jpeg;base64,${rowData.base64}`;

  function mouseEnter(params) {
    setHover(() => {
      return true;
    });
  }

  function mouseLeave(params) {
    setHover(() => {
      return false;
    });
  }

  return (
    <div className="TableRow">
      <div className="TableRow__preview">
        <img
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          src={imageSrc}
          alt="imag"
          style={{ height: "30px", width: "30px" }}
        />
        {hover ? <ImageHoverPreview image={imageSrc} /> : <></>}
      </div>
      <div className="TableRow__filename">{rowData.fileName}</div>
      <div className="TableRow__size">{formatBytes(rowData.fileSize)}</div>
      <div className="TableRow__status">Status</div>
      <div className="TableRow__cancelButton">cancel button</div>
    </div>
  );
};

export default TableRow;

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
