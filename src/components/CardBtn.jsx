import React from "react";

const CardBtn = ({ CardBtnText }) => {
  return (
    <div className="mr-2  w-fit bg-[#ebb625] rounded-[13.50px] ">
      <div className="flex items-center py-1 px-2">
        <img src="/public/images/dia.svg" alt={CardBtnText} />
        <p className="text-sm text-white">{CardBtnText}</p>
      </div>
    </div>
  );
};

export default CardBtn;
