import React from "react";
import CheckInContent from "./CheckinContent";
const CheckIn = ({ setCurrentPage }) => {
  return (
    <div>
      <div className="bg-customBg w-full">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("Menu")}
            className="pt-14 pb-3 flex "
          >
            <img src="/public/images/angle-left.svg" alt="右矢印" />
            <p className=" mx-auto text-white">チェックイン管理</p>
          </div>
        </div>
      </div>
      <CheckInContent MenuText="大須商店街" MenuCount="3" />
      <CheckInContent MenuText="円頓寺商店街" MenuCount="2" />
      <CheckInContent MenuText="SAKUMACHI商店街" MenuCount="5" />
      <CheckInContent MenuText="せと末広街商店街" MenuCount="1" />
    </div>
  );
};

export default CheckIn;
