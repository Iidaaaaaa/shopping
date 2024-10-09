import React from "react";
const InfoContent = ({ InfoDay, InfoTitle, onClick }) => {
  return (
    <div className="border-b-2 border-solid">
      <div onClick={onClick} className="max-w-xs mt-6 mx-auto pb-5 ">
        <p className="text-customDay">{InfoDay}</p>
        <h4>{InfoTitle}</h4>
      </div>
    </div>
  );
};

export default InfoContent;
