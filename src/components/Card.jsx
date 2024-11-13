import React from "react";
import CardBtn from "../components/CardBtn";
import CardMore from "../components/CardMore";

const Card = ({ CardTitle, CardText, CardBtnText, CardScore, CardImage }) => {
  return (
    <div>
      <div className="max-w-xs pb-5 mx-auto mt-6 rounded-md shadow-lg">
        <div className="relative">
          <img className="w-[320px]" src={CardImage} alt={CardTitle} />
          <div className="absolute flex items-center h-5 p-1 bg-white bottom-10 left-2">
            <img className="mr-1" src="/images/walk2.svg" alt="icon" />
            <p className="text-sm">{CardScore}</p>
          </div>
          <p className="absolute flex items-center h-6 p-1 text-xl bg-white bottom-3 left-2">
            {CardTitle}
          </p>
        </div>
        <p className="px-4 pt-2 line-clamp-3">{CardText}</p>
        <div className="flex items-center mt-4 ml-4">
          <CardBtn CardBtnText={CardBtnText} />
          <CardBtn CardBtnText={CardBtnText} />
        </div>
        <CardMore />
      </div>
    </div>
  );
};

export default Card;
