import React from "react";
import CheckInContent from "./CheckinContent";
const Setting = ({ setCurrentPage }) => {
  return (
    <div>
      <div className="bg-customBg w-full">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("CheckInfo")}
            className="pt-14 pb-3 flex "
          >
            <img src="/public/images/angle-left.svg" alt="右矢印" />
            <p className=" mx-auto text-white">設定</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
