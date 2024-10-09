import React from "react";

const TopBtn = ({ AppImage, BtnText, onClick }) => {
  return (
    <div className="mb-3 w-[316px] h-[52px] relative" onClick={onClick}>
      <div className="w-[316px] h-[52px] left-0 top-0 absolute bg-white rounded-[26px] border border-[#513c38]" />
      <img
        className="w-[27px] h-[27px] left-[21px] top-[13px] absolute"
        src={AppImage}
        alt={BtnText}
      />
      <div className="left-[95px] top-[15px] absolute text-[#513c38] text-[15px] font-medium font-['Noto Sans JP']">
        {BtnText}
      </div>
    </div>
  );
};

export default TopBtn;
