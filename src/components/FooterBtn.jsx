import React from "react";

const FooterBtn = ({ onClick, Icon, alt, className, color, TextColor }) => {
  return (
    <div className={`flex flex-col w-fit ${className}`} onClick={onClick}>
      <Icon className="w-6 h-6 mx-auto" color={color} />
      <p className={`text-10 ${TextColor}`}>{alt}</p>
    </div>
  );
};

export default FooterBtn;
