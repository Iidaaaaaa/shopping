import React from "react";
const CheckInContent = ({ MenuCount, MenuText }) => {
  return (
    <div className="max-w-xs mx-auto">
      <div className="flex items-center justify-between  mt-7 pb-5  border-b-2 border-solid">
        <p className="text-base">{MenuText}</p>
        <p className="flex items-center">
          <span className="text-4xl mr-1">{MenuCount} </span>回
        </p>
      </div>
    </div>
  );
};

export default CheckInContent;
