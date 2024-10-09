import React from "react";

const MenuItem = ({ onClick, ItemSrc, ItemAlt }) => {
  return (
    <div className="flex items-center mb-9" onClick={onClick}>
      <img className="mr-3" src={ItemSrc} alt={ItemAlt} />
      <p className="text-base">{ItemAlt}</p>
    </div>
  );
};

export default MenuItem;
