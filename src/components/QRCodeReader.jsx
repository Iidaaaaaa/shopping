import React, { useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "/firebaseConfig";
import { QrReader } from "react-qr-reader";

const QRCodeReader = ({ user, handleTabClick }) => {
  const [isScanning, setIsScanning] = useState(true);
  const [currentPage, setCurrentPage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [scanResult, setScanResult] = useState(null); // 新しい状態を追加

  const handleScan = async (result) => {
    if (!isScanning) {
      return;
    }

    if (result?.text) {
      setScanResult(result.text); // 読み取ったテキストを保存
      try {
        const storeName = result.text;
        const today = new Date().toISOString().split("T")[0]; // 今日の日付を "yyyy-MM-dd" フォーマットに変換

        // Firestoreのユーザードキュメント参照
        const userDocRef = doc(db, storeName, user.uid); // スキャンした商店街名をコレクション名として使用

        // ユーザードキュメントからデータを取得
        const userSnap = await getDoc(userDocRef);

        // ユーザードキュメントが存在する場合
        if (userSnap.exists()) {
          const userData = userSnap.data();
          const lastScannedDate = userData.lastScannedDate || "";

          // 同じ日にスキャンされた場合はエラーメッセージを表示
          if (lastScannedDate === today) {
            setErrorMessage(
              "今日は既にスキャンされています。明日またお試しください。"
            );
            setCurrentPage("Ranking");
            return;
          }

          const currentCount = userData.count || 0;

          // countフィールドとlastScannedDateフィールドを更新
          await updateDoc(userDocRef, {
            count: currentCount + 1,
            lastScannedDate: today,
          });
        } else {
          // ユーザードキュメントが存在しない場合は新規作成
          await setDoc(userDocRef, {
            count: 1,
            lastScannedDate: today,
          });
        }

        setSuccessMessage(`Store: ${storeName} が正常にスキャンされました！`);

        // ランキングページに遷移
        handleTabClick(storeName);

        // スキャンを30秒間無効にする
        setIsScanning(false);
        setTimeout(() => {
          setIsScanning(true);
        }, 3000);
      } catch (error) {
        setErrorMessage("スキャン中にエラーが発生しました。");
      }
    }
  };

  return (
    <div>
      <QrReader delay={300} onResult={handleScan} />
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      {scanResult && <div>読み取ったテキスト: {scanResult}</div>}{" "}
      {/* 読み取ったテキストを表示 */}
    </div>
  );
};

export default QRCodeReader;
