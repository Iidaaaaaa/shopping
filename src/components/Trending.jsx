import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "/firebaseConfig";

const Trending = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "stores"));
        const stores = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStoreData(stores); // データを state に保存
      } catch (error) {
        console.error("Error fetching stores data: ", error);
      }
    };
    fetchMapData();
  }, []);

  return (
    <div>
      <div className="w-full bg-customBg">
        <div className="max-w-xs mx-auto">
          <div className="flex items-center pb-3 mx-auto pt-14 w-fit">
            <img className="mr-1" src="./images/Trending.svg" alt="右矢印" />
            <p className="text-white">急上昇</p>
          </div>
        </div>
      </div>
      <div className="mb-40">
        {storeData.map((store) => (
          <Card
            key={store.id}
            CardTitle={store.storeName || "Unnamed Store"}
            CardText={store.description || "No description available"}
            CardBtnText={store.tags[0] || ["No tags available"]}
            CardScore={store.score || "0"}
            CardImage={store.imageUrl || "/images/default.png"}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
