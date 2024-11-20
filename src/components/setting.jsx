import React from "react";
const Setting = ({ setCurrentPage }) => {
  return (
    <div>
      <div className="w-full bg-customBg">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("CheckInfo")}
            className="flex pb-3 pt-14 "
          >
            <img src="./images/angle-left.svg" alt="右矢印" />
            <p className="mx-auto text-white ">設定</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
