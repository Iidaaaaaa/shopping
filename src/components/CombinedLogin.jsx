
import React from "react";
import { auth, db } from "/firebaseConfig";
import { OAuthProvider, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AppleLoginButton = ({ setCurrentPage, setUserInfo }) => {
  const handleAppleLogin = async () => {
    const provider = new OAuthProvider("apple.com");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserInfo({ name: user.displayName, address: user.email, icon: user.photoURL });
      setCurrentPage("map");
    } catch (error) {
      console.error("Appleログインエラー:", error);
    }
  };

  return <TopBtn BtnText="Appleでログイン" AppImage="/public/images/apple.svg" onClick={handleAppleLogin} />;
};

const GoogleLoginButton = ({ setCurrentPage, setUserInfo }) => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), { name: user.displayName, address: user.email, icon: user.photoURL });
      setUserInfo({ name: user.displayName, address: user.email, icon: user.photoURL });
      setCurrentPage("map");
    } catch (error) {
      console.error("Googleログインエラー:", error);
    }
  };

  return <TopBtn BtnText="Googleでログイン" AppImage="/public/images/Google.png" onClick={handleGoogleLogin} />;
};

const TwitterLoginButton = ({ setCurrentPage, setUserInfo }) => {
  const handleTwitterLogin = async () => {
    const provider = new TwitterAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserInfo({ name: user.displayName, address: user.email, icon: user.photoURL });
      setCurrentPage("map");
    } catch (error) {
      console.error("Twitterログインエラー:", error);
    }
  };

  return <TopBtn BtnText="X(旧Twitter)でログイン" AppImage="/public/images/twitter.svg" onClick={handleTwitterLogin} />;
};

const Toplogin = ({ setCurrentPage, setUserInfo }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="mb-5" src="/public/images/AppIcon.png" alt="アイコン" />
      <p className="text-2xl mb-11 text-[#513C38]">ログイン</p>
      <GoogleLoginButton setCurrentPage={setCurrentPage} setUserInfo={setUserInfo} />
      <AppleLoginButton setCurrentPage={setCurrentPage} setUserInfo={setUserInfo} />
      <TwitterLoginButton setCurrentPage={setCurrentPage} setUserInfo={setUserInfo} />
    </div>
  );
};

export default Toplogin;
