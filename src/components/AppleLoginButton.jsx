import React from "react";
import TopBtn from "./TopBtn";
import { auth } from "/firebaseConfig";
import { OAuthProvider, signInWithPopup } from "firebase/auth";

const AppleLoginButton = ({ setCurrentPage, setUserInfo }) => {
  const handleAppleLogin = async () => {
    const provider = new OAuthProvider("apple.com");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // ユーザー情報を保存
      setUserInfo({
        name: user.displayName,
        age: null, // 年齢は手動で設定する必要があります
        address: user.email,
        icon: user.photoURL,
      });

      // ページをMapLayoutに変更
      setCurrentPage("map");
    } catch (error) {
      console.error("Appleログインエラー:", error);
    }
  };

  return (
    <TopBtn
      BtnText={"Appleでログイン"}
      AppImage={"./images/apple.svg"}
      onClick={handleAppleLogin}
    />
  );
};

export default AppleLoginButton;
