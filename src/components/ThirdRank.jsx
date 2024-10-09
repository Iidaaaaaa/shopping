import React from "react";
import RankingIcon from "../assets/icons/RankingIcon";
import RankingUser from "./RankingUser";

const ThirdRank = () => {
  const user = {
    name: "＼(^o^)／",
    photoURL: "/public/images/icon.png",
    scanCount: 4,
  };
  return (
    <div>
      <div className="shadow-inner shadow-gray-300 px-2 rounded-lg ">
        <div className="pt-2 pb-2">
          <RankingIcon color="#f3c42c" width={24} height={24} />
        </div>
        <ul id="dataList" className="mx-3 pb-5">
          <RankingUser
            user={user}
            index={2}
            rankStyle="text-xl"
            imgStyle="w-12 h-12"
            nameStyle="text-sm w-24"
            iconSrc="/public/images/walk2.svg"
            countStyle="text-3xl"
            h1Margin={"mr-4"}
          />
        </ul>
      </div>
    </div>
  );
};

export default ThirdRank;
