import React from "react";
const CheckinBtn = ({ Icon, alt, className, onClick }) => {
  return (
    <div
      className={`flex rounded-2xl flex-col w-custom bg-gradient-to-b from-[#edaa5b] to-[#df5822] ${className}`}
      onClick={onClick}
    >
      <Icon alt={alt} className="w-12 h-12  mx-auto" />
      <p className="text-10 mx-auto  pb-2 text-white">{alt}</p>
    </div>
  );
};

export default CheckinBtn;
