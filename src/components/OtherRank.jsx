import React from "react";
import RankingUser from "./RankingUser";
import RankingIcon from "../assets/icons/RankingIcon"; // 必要に応じてインポート

const OtherRank = ({ scanCount, IndexCount, Name }) => {
  const user = {
    name: Name,
    photoURL: "/public/images/icon.png",
    scanCount: scanCount,
  };

  return (
    <div>
      <div className="shadow-inner shadow-gray-300 py-2 px-2 rounded-lg">
        <ul id="dataList" className="mx-3 ">
          <RankingUser
            user={user}
            index={IndexCount}
            rankStyle="text-xl"
            imgStyle="w-12 h-12"
            nameStyle="text-sm w-24"
            countStyle="text-3xl"
            iconSrc="/public/images/walk2.svg"
            iconAlt="Walk Icon"
            iconStyle="mr-2"
            h1Margin={"mr-4"}
          />
        </ul>
      </div>
    </div>
  );
};

export default OtherRank;
