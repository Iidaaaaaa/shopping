import React from "react";
import TopBtn from "./TopBtn";
import { auth } from "/firebaseConfig";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

const TwitterLoginButton = ({ setCurrentPage, setUserInfo }) => {
  const handleTwitterLogin = async () => {
    const provider = new TwitterAuthProvider();
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
      console.error("Twitterログインエラー:", error);
    }
  };

  return (
    <TopBtn
      BtnText={"X(旧Twitter)でログイン"}
      AppImage={"/public/images/twitter.svg"}
      onClick={handleTwitterLogin}
    />
  );
};

export default TwitterLoginButton;
