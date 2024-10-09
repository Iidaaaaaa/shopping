import React from "react";
import MapToggleCode from "../components/MapToggleCode";

const MapInfo = ({ title, score, text, img }) => {
  const [position, togglePosition] = MapToggleCode();

  return (
    <div
      className={`z-50 fixed ${position} left-0 bg-white w-full h-full rounded-tl-[15px] rounded-tr-[15px] shadow transition-all duration-500`}
      onClick={togglePosition}
      style={{ display: position === "hidden" ? "none" : "block" }}
    >
      <div className="max-w-xs mx-auto text-[#513c38]">
        <h1 className="mt-6 text-2xl ">{title}</h1>
        <div className="flex items-center mt-1">
          <img className="mr-1" src="/public/images/walk2.svg" alt="記録" />
          <p>{score}</p>
        </div>
        <img className="mt-6" src={img} alt={title} />
        <p className="mt-4 leading-[25px]">{text}</p>
      </div>
    </div>
  );
};

export default MapInfo;
