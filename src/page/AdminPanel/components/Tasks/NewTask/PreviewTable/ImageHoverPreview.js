import React from "react";

const ImageHoverPreview = ({ image }) => {
  return (
    <div className="ImageHoverPreview">
      <img className="ImageHoverPreview__image" src={image} alt="imag" />
    </div>
  );
};

export default ImageHoverPreview;
