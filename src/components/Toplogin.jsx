import React from "react";
import GoogleLoginButton from "../components/GoogleLoginButton";
import AppleLoginButton from "../components/AppleLoginButton";
import TwitterLoginButton from "../components/TwitterLoginButton";

const Toplogin = ({ setCurrentPage, setUserInfo }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="mb-5" src="/public/images/AppIcon.png" alt="アイコン" />
      <p className="text-2xl mb-11 text-[#513C38]">ログイン</p>
      <GoogleLoginButton
        setCurrentPage={setCurrentPage}
        setUserInfo={setUserInfo}
      />
      <AppleLoginButton
        setCurrentPage={setCurrentPage}
        setUserInfo={setUserInfo}
      />
      <TwitterLoginButton
        setCurrentPage={setCurrentPage}
        setUserInfo={setUserInfo}
      />
    </div>
  );
};

export default Toplogin;
