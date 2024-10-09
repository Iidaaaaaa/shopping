import React, { useState } from "react";
import Ranking from "./Ranking";
import SecondRank from "./SecondRank";
import ThirdRank from "./ThirdRank";
import OtherRank from "./OtherRank";

const RankingAll = ({ userId }) => {
  const [scanCount, setScanCount] = useState(1); // 初期値を設定

  const handleScanCountChange = (newCount) => {
    setScanCount(newCount);
  };

  return (
    <div className="pb-14">
      <div className="mb-5 bg-gradient-to-l from-[#eca95a] to-[#da390d] rounded-[9px]">
        <Ranking userId={userId} />
      </div>
      <div className="mb-5 bg-[#fbf7ec]">
        <SecondRank userId={userId} />
      </div>
      <div className="mb-5 bg-[#fbf7ec]">
        <ThirdRank userId={userId} />
      </div>
      <div className="mb-5 bg-[#fbf7ec]">
        <OtherRank scanCount={2} IndexCount={3} Name={"妖怪ウォッチ"} />
      </div>
      <div className="mb-5 bg-[#fbf7ec]">
        <OtherRank scanCount={1} IndexCount={4} Name={"あいうおｓ"} />
      </div>
    </div>
  );
};

export default RankingAll;
