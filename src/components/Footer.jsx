import React, { useState } from "react";
import FooterBtn from "./FooterBtn";
import CheckinBtn from "../components/CheckinBtn";
import RankingIcon from "../assets/icons/RankingIcon";
import MapIcon from "../assets/icons/MapIcon";
import ScanIcon from "../assets/icons/ScanIcon";
import BoomIcon from "../assets/icons/BoomIcon";
import MenuIcon from "../assets/icons/MenuIcon";

const Footer = ({ setCurrentPage }) => {
  const [activeButton, setActiveButton] = useState("map");

  const handleButtonClick = (page, buttonId) => {
    setCurrentPage(page);
    setActiveButton(buttonId);
  };

  return (
    <footer className="z-50 fixed bottom-0 left-0 w-full overflow-x-auto">
      <div className="bg-white w-screen flex justify-around items-center py-6 shadow-inner shadow-gray-300">
        <FooterBtn
          Icon={RankingIcon}
          alt="ランキング"
          onClick={() => handleButtonClick("ranking", "ranking")}
          className="mx-auto"
          TextColor={
            activeButton === "ranking" ? "text-red-500" : "text-gray-500"
          }
          color={activeButton === "ranking" ? "red" : "#ACACAC"}
        />
        <FooterBtn
          Icon={MapIcon}
          alt="マップ"
          onClick={() => handleButtonClick("map", "map")}
          className="mx-auto"
          TextColor={activeButton === "map" ? "text-red-500" : "text-gray-500"}
          color={activeButton === "map" ? "red" : "#ACACAC"}
        />
        <CheckinBtn
          Icon={ScanIcon}
          alt="チェックイン"
          onClick={() => handleButtonClick("QRCodeReader", "QRCodeReader")}
          className="mx-auto"
          color={activeButton === "QRCodeReader" ? "red" : "#ACACAC"}
        />
        <FooterBtn
          Icon={BoomIcon}
          alt="急上昇"
          onClick={() => handleButtonClick("trending", "trending")}
          className="mx-auto"
          TextColor={
            activeButton === "trending" ? "text-red-500" : "text-gray-500"
          }
          color={activeButton === "trending" ? "red" : "#ACACAC"}
        />
        <FooterBtn
          Icon={MenuIcon}
          alt="メニュー"
          onClick={() => handleButtonClick("menu", "menu")}
          className="mx-auto"
          TextColor={activeButton === "menu" ? "text-red-500" : "text-gray-500"}
          color={activeButton === "menu" ? "red" : "#ACACAC"}
        />
      </div>
    </footer>
  );
};

export default Footer;
