import React, { useState, useEffect } from "react";
import { db } from "/firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; // Firestoreの関数をインポート

const TabMenu = ({ userId, onTabClick }) => {
  const [activeTab, setActiveTab] = useState("");
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "stores"));
        const tabNames = querySnapshot.docs.map((doc) => doc.id);
        setTabs(tabNames);
        if (tabNames.length > 0) {
          setActiveTab(tabNames[0]);
          onTabClick(tabNames[0]);
        }
      } catch (error) {
        console.error("Error fetching tabs: ", error);
      }
    };

    fetchTabs();
  }, []);

  const handleTabClick = (tab) => {
    console.log("Tab clicked:", tab); // デバッグ用のログ
    setActiveTab(tab);
    onTabClick(tab); // 親コンポーネントにタブの変更を通知
  };

  return (
    <div>
      <div className="flex w-full mt-6 border-b-2 border-b-[#513c38] overflow-x-auto">
        <div className="flex min-w-max items-end">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`w-fit h-fit flex-none whitespace-nowrap rounded-tr-md rounded-tl-md ${
                activeTab === tab
                  ? "bg-[#513c38] text-xl pt-4 pb-2 px-5 text-white"
                  : "bg-white border border-[#513c38] text-sm py-2.5 px-4 text-[#513c38] "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
