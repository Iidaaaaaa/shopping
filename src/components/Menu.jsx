import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import CustomMenuLayout from "../components/CustomMenuLayout";

const allowedEmails = [
  "okiyamafirebaseservice@gmail.com",
  "naotookiyama@gmail.com",
  "sasarayamauchi8@gmail.com",
];
const Menu = ({ setCurrentPage, userInfo }) => {
  return (
    <div className="font-notosansjp">
      <div className="relative w-full h-48 bg-slate-200">
        <div className="absolute max-w-24 max-h-24 top-36 left-40">
          <img
            className="rounded-full"
            src={userInfo.photoURL || "/public/images/icon.png"}
            alt="icon"
          />
        </div>
      </div>
      <div className="max-w-xs mx-auto mt-16 ">
        <h2 className="mx-auto text-2xl text-center mb-9">
          {userInfo ? userInfo.displayName : "名前がないよ"}
        </h2>
        <MenuItem
          onClick={() => setCurrentPage("checkin")}
          ItemSrc="/public/images/location.svg"
          ItemAlt="チェックイン管理"
        />
        <MenuItem
          onClick={() => setCurrentPage("checkinfo")}
          ItemSrc="/public/images/bell.svg"
          ItemAlt="お知らせ"
        />
        <MenuItem
          onClick={() => setCurrentPage("setting")}
          ItemSrc="/public/images/gear.svg"
          ItemAlt="設定*中身なし"
        />
        <MenuItem
          onClick={() => setCurrentPage("search")}
          ItemSrc="/public/images/glass.svg"
          ItemAlt="探す"
        />
        {allowedEmails.includes(userInfo.email) && (
          <MenuItem
            onClick={() => setCurrentPage("admin")}
            ItemSrc="/public/images/gear.svg"
            ItemAlt="管理者"
          />
        )}
      </div>
      {/* 管理者ページのコンテンツ */}
      {allowedEmails.includes(userInfo.email) && setCurrentPage === "admin" && (
        <CustomMenuLayout />
      )}
    </div>
  );
};

export default Menu;
