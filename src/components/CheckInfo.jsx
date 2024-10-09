import React from "react";
import InfoContent from "./InfoContent";
const CheckInfo = ({ setCurrentPage }) => {
  return (
    <div>
      <div className="bg-customBg w-full">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("Menu")}
            className="pt-14 pb-3 flex"
          >
            <img src="/public/images/angle-left.svg" alt="右矢印" />
            <p className=" mx-auto text-white">お知らせ</p>
          </div>
        </div>
      </div>
      <InfoContent
        onClick={() => setCurrentPage("Article")}
        InfoTitle="システムメンテナンスのお知らせ"
        InfoDay="2024/9/18 10:50"
      />
      <InfoContent
        onClick={() => setCurrentPage("Article")}
        InfoTitle="【システムアップデートのお知らせ】バグ修正とパフォーマンス向上の最新情報"
        InfoDay="2024/9/13 10:50"
      />
      <InfoContent
        onClick={() => setCurrentPage("Article")}
        InfoTitle="【ユーザーアンケートのお願い】より良いサービスのために皆様の声をお聞かせください"
        InfoDay="2024/9/10 10:50"
      />
    </div>
  );
};

export default CheckInfo;
