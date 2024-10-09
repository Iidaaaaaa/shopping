import React from "react";

const RankingUser = ({
  user,
  index,
  rankStyle,
  imgStyle,
  nameStyle,
  countStyle,
  iconSrc,
  iconAlt = "Crown",
  iconStyle = "mr-2",
  h1Margin,
  textColor = "text-[#513c38]",
}) => {
  return (
    <li className={`flex items-center mb-2 ${rankStyle}`}>
      <h1 className={`${textColor} w-3 text-xl ${h1Margin}`}>{index + 1}</h1>
      <img
        src={user.photoURL || "/public/images/icon.png"}
        alt={user.name}
        className={`rounded-full w-12 h-12 mr-4 ${imgStyle}`}
      />
      <p
        className={`${textColor} mr-12 whitespace-nowrap overflow-hidden overflow-ellipsis ${nameStyle}`}
      >
        {user.name}
      </p>
      <div className={`${textColor}  flex items-center mr-2 ${countStyle}`}>
        <img src={iconSrc} alt={iconAlt} className={iconStyle} />
        <p className=" text-3xl pr-2">{user.scanCount || 0}</p>
      </div>
    </li>
  );
};

export default RankingUser;
