import React, { useEffect, useState } from "react";
import { db, getDocs, collection } from "/firebaseConfig";
import RankingIcon from "../assets/icons/RankingIcon";
import RankingUser from "./RankingUser";
import CrownIcon from "../assets/icons/CrownIcon";

const RankingAll = () => {
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

  const secondRankUser = {
    name: "適当たろうくん",
    photoURL: "/public/images/icon.png",
    scanCount: 6,
  };

  const thirdRankUser = {
    name: "＼(^o^)／",
    photoURL: "/public/images/icon.png",
    scanCount: 4,
  };

  return (
    <div className="mb-40 max-w-xs mx-auto">
      <div className="bg-gradient-to-l from-[#eca95a] to-[#da390d] shadow-inner shadow-gray-300 px-2 rounded-lg mt-5">
        <div className="pt-2 pb-2">
          <RankingIcon color="#fbe097" width={41} height={41} />
        </div>
        <ul id="dataList" className="mx-3 pb-5">
          <RankingUser
            user={secondRankUser}
            textColor="text-white"
            index={1}
            rankStyle="text-xl"
            imgStyle="w-12 h-12"
            nameStyle="text-sm w-24"
            countStyle="text-3xl"
            iconSrc={"/public/images/crown.svg"}
            h1Margin={"mr-4"}
          />
        </ul>
      </div>

      {/* SecondRank Component */}
      <div className="bg-[#FCF7EC] shadow-inner shadow-gray-300 px-2 rounded-lg mt-5">
        <div className="pt-2 pb-2">
          <RankingIcon color="#f4ae7e" width={24} height={24} />
        </div>
        <ul id="dataList" className="mx-3 pb-5">
          <RankingUser
            user={secondRankUser}
            index={1}
            rankStyle="text-xl"
            imgStyle="w-12 h-12"
            nameStyle="text-sm w-24"
            countStyle="text-3xl"
            iconSrc="/public/images/walk2.svg"
            h1Margin={"mr-4"}
          />
        </ul>
      </div>

      {/* ThirdRank Component */}
      <div className="bg-[#FCF7EC] shadow-inner shadow-gray-300 px-2 rounded-lg mt-5">
        <div className="pt-2 pb-2">
          <RankingIcon color="#f3c42c" width={24} height={24} />
        </div>
        <ul id="dataList" className="mx-3 pb-5">
          <RankingUser
            user={thirdRankUser}
            index={2}
            rankStyle="text-xl"
            imgStyle="w-12 h-12"
            nameStyle="text-sm w-24"
            countStyle="text-3xl"
            iconSrc="/public/images/walk2.svg"
            h1Margin={"mr-4"}
          />
        </ul>
      </div>
      <div className="bg-[#FCF7EC] shadow-inner shadow-gray-300 px-2 rounded-lg mt-5">
        {[{ name: "ユーザー4", scanCount: 3 }].map((user, index) => (
          <ul id="dataList" className="mx-3" key={index}>
            <li className="flex items-center py-3 text-xl">
              <h1 className="text-[#513c38] w-3 text-xl mr-4">{index + 4}</h1>
              <img
                src="/public/images/icon.png"
                alt={user.name}
                className="rounded-full w-12 h-12 mr-4"
              />
              <p className="text-[#513c38] mr-12 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm w-24">
                {user.name}
              </p>
              <div className="text-[#513c38] flex items-center mr-2 text-3xl">
                <img
                  src="/public/images/walk2.svg"
                  alt="Walk Icon"
                  className="mr-2"
                />
                <p className="text-3xl pr-2">{user.scanCount}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <div className="bg-[#FCF7EC] shadow-inner shadow-gray-300 px-2 rounded-lg mt-5">
        {[{ name: "ユーザー5", scanCount: 2 }].map((user, index) => (
          <ul id="dataList" className="mx-3" key={index}>
            <li className="flex items-center py-3 text-xl">
              <h1 className="text-[#513c38] w-3 text-xl mr-4">{index + 5}</h1>
              <img
                src="/public/images/icon.png"
                alt={user.name}
                className="rounded-full w-12 h-12 mr-4"
              />
              <p className="text-[#513c38] mr-12 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm w-24">
                {user.name}
              </p>
              <div className="text-[#513c38] flex items-center mr-2 text-3xl">
                <img
                  src="/public/images/walk2.svg"
                  alt="Walk Icon"
                  className="mr-2"
                />
                <p className="text-3xl pr-2">{user.scanCount}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default RankingAll;
