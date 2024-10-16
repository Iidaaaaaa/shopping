import React from "react";
import TopBtn from "./TopBtn";
import { auth, db } from "/firebaseConfig"; // 修正: "../firebaseConfig" に変更
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const GoogleLoginButton = ({ setCurrentPage, setUserInfo }) => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);

      // Firestoreにユーザー情報を保存
      await setDoc(doc(db, "users", user.displayName), {
        name: user.displayName,
        address: user.email,
        icon: user.photoURL,
      });

      // ユーザー情報を保存
      setUserInfo({
        name: user.displayName,
        address: user.email,
        icon: user.photoURL,
        email: user.email, // emailを追加
      });

      // メニューページにリダイレクト
      setCurrentPage("Map");
    } catch (error) {
      console.error("Googleログインエラー:", error);
    }
  };

  return (
    <TopBtn
      BtnText={"Googleでログイン"}
      AppImage={"/public/images/Google.png"}
      onClick={handleGoogleLogin}
    />
  );
};

export default GoogleLoginButton;
