import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/firebaseConfig"; // authのインポート
import QRCodeReader from "../components/QRCodeReader";
import RankingLayout from "./RankingLayout"; // ランキングページのコンポーネントをインポート

const ScanLayout = () => {
  const [user, setUser] = useState(null); // userステートを定義
  const [currentPage, setCurrentPage] = useState("scan"); // currentPageステートを定義
  const [selectedStore, setSelectedStore] = useState(""); // スキャンした商店街名を保存するステート

  // ユーザーが認証されているかを確認するuseEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // ログイン中のユーザー情報をセット
      } else {
        setUser(null); // ログアウト時はuserをnullに設定
      }
    });

    // クリーンアップ関数
    return () => unsubscribe();
  }, []);

  const handleTabClick = (tab) => {
    console.log("現在のアクティブなタブ:", tab);
    setSelectedStore(tab);
    setCurrentPage("ranking");
  };

  return (
    <div>
      {user ? (
        currentPage === "scan" ? (
          <QRCodeReader user={user} handleTabClick={handleTabClick} /> // ユーザーが認証されている場合にQRCodeReaderを表示
        ) : (
          <RankingLayout storeName={selectedStore} /> // ランキングページを表示
        )
      ) : (
        <p>ログインしてください。</p> // ユーザーが認証されていない場合
      )}
    </div>
  );
};

export default ScanLayout;
