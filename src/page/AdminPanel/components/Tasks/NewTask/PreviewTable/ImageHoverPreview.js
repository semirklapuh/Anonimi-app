import React from "react";

const ImageHoverPreview = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        alt="imag"
        style={{ height: "30px", width: "30px", marginTop: "1rem" }}
      />
    </div>
  );
};

export default ImageHoverPreview;
