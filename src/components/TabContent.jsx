import React, { useState, useEffect } from "react";
import ImageComponent from "./ImageComponent"; // 画像表示用のコンポーネントをインポート
import CardBtn from "./CardBtn";
import { db } from "/firebaseConfig"; // Firestoreのインポート
import { collection, getDocs } from "firebase/firestore"; // Firestoreの関数をインポート

const TabContent = ({ activeTab }) => {
  const [tabData, setTabData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "stores"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTabData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!tabData) {
    return <div>Loading...</div>;
  }

  const activeData = tabData.find((data) => data.id === activeTab);

  if (!activeData) {
    return <div>No data found for the selected tab.</div>;
  }

  return (
    <div className="max-w-xs mx-auto mt-10">
      <div>
        <ImageComponent src={activeData.imageUrl} alt={activeData.storeName} />
        <div className="flex items-center">
          <img
            className="mr-1"
            src="./images/walk2.svg"
            alt={activeData.storeName}
          />
          <p className="text-sm">{activeData.score}</p>
        </div>
        <h2 className="mb-3 text-xl">{activeData.storeName}</h2>
        <p className="text-sm mb-5 leading-[25px]">{activeData.description}</p>
        <div className="flex items-center mb-14">
          {activeData.tags &&
            activeData.tags.map((tag, index) => (
              <CardBtn key={index} CardBtnText={tag} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TabContent;
