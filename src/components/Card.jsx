import React from "react";
import CardBtn from "../components/CardBtn";
import CardMore from "../components/CardMore";

const Card = ({ CardTitle, CardText, CardBtnText, CardScore, CardImage }) => {
  return (
    <div>
      <div className="max-w-xs mt-6 mx-auto rounded-md  shadow-lg pb-5">
        <div className="relative">
          <img className="w-[320px]" src={CardImage} alt={CardTitle} />
          <div className="absolute bottom-10 left-2 flex items-center bg-white  p-1 h-5">
            <img className="mr-1" src="/images/walk2.svg" alt="icon" />
            <p className="text-sm">{CardScore}</p>
          </div>
          <p className="text-xl absolute bottom-3 left-2 flex items-center bg-white  p-1 h-6">
            {CardTitle}
          </p>
        </div>
        <p className="px-4 pt-2 line-clamp-3">{CardText}</p>
        <div className="mt-4 flex items-center">
          <CardBtn CardBtnText={CardBtnText} />
          <CardBtn CardBtnText={CardBtnText} />
        </div>
        <CardMore />
      </div>
    </div>
  );
};

export default Card;
