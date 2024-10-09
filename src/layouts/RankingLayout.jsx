import React, { useState } from "react";
import TabMenu from "../components/TabMenu";
import TabContent from "../components/TabContent";
import RankingAll from "../components/RankingAll";

const RankingLayout = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    console.log("現在のアクティブなタブ:", tab);
    setActiveTab(tab);
  };

  return (
    <div>
      <TabMenu onTabClick={handleTabClick} />
      <TabContent activeTab={activeTab} />
      <RankingAll />
    </div>
  );
};

export default RankingLayout;
