import React, { useEffect, useState } from "react";
import { db, getDocs, collection } from "/firebaseConfig";
import RankingIcon from "../assets/icons/RankingIcon";
import RankingUser from "./RankingUser"; // 新しいコンポーネントをインポート

const Ranking = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersList = [];
        querySnapshot.forEach((doc) => {
          usersList.push(doc.data());
        });
        setUsers(usersList);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <div className=" px-2 rounded-lg  shadow-inner shadow-gray-300">
        <div className="pt-2 pb-5">
          <RankingIcon color="#fbe097" width={41} height={41} />
        </div>
        <ul id="dataList" className="mx-3 pb-5">
          {users.map((user, index) => (
            <RankingUser
              iconSrc={"/public/images/crown.svg"}
              textColor="text-white"
              key={index}
              user={user}
              index={index}
              h1Margin={"mr-5"}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ranking;
