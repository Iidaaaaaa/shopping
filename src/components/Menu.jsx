import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import CustomMenuLayout from "../components/CustomMenuLayout";

const Menu = ({ setCurrentPage, userInfo }) => {
  return (
    <div className="font-notosansjp">
      <div className="bg-slate-200 w-full h-48 relative">
        <div className="max-w-24 max-h-24 absolute top-36 left-40">
          <img
            className="rounded-full"
            src="/public/images/icon.png"
            alt="icon"
          />
        </div>
      </div>
      <div className="mt-16 max-w-xs mx-auto ">
        <h2 className="text-center mx-auto text-2xl mb-9">ハヤト</h2>
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
        {userInfo.email === "okiyamafirebaseservice@gmail.com" && (
          <MenuItem
            onClick={() => setCurrentPage("admin")}
            ItemSrc="/public/images/gear.svg"
            ItemAlt="管理者"
          />
        )}
      </div>
      {/* 管理者ページのコンテンツ */}
      {userInfo.email === "okiyamafirebaseservice@gmail.com" &&
        setCurrentPage === "admin" && <CustomMenuLayout />}
    </div>
  );
};

export default Menu;
