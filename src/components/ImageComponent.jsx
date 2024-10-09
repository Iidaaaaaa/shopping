// src/components/ImageComponent.jsx
import React from "react";

const ImageComponent = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full max-h-[182px] object-cover mb-3"
    />
  );
};

export default ImageComponent;
