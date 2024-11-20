import React from "react";
import TopBtn from "./TopBtn";
import { auth, db } from "/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";

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
        userId: user.uid,
      });

      // 各商店街の初期データ設定とカウント集計
      const initializeUserInStores = async (db, user) => {
        const storesSnapshot = await getDocs(collection(db, "stores"));
        for (const storeDoc of storesSnapshot.docs) {
          const storeName = storeDoc.id;

          // 商店街ごとにユーザー情報を保存
          const userDocRef = doc(db, `${storeName}`, user.uid); // 商店街名がコレクション名
          const userDocSnap = await getDoc(userDocRef);

          // countフィールドが存在しない場合のみドキュメントを作成または更新
          if (!userDocSnap.exists() || userDocSnap.data().count === undefined) {
            await setDoc(
              userDocRef,
              {
                count: 0,
              },
              { merge: true }
            );
          }
        }
      };

      await initializeUserInStores(db, user);

      // 商店街ごとにユーザーのカウントを集計し、Firestoreに保存する関数
      const calculateAndStoreTotalScore = async () => {
        const storesSnapshot = await getDocs(collection(db, "stores"));
        for (const storeDoc of storesSnapshot.docs) {
          const storeName = storeDoc.id;
          const usersSnapshot = await getDocs(collection(db, storeName));
          let totalScore = 0;

          // 各ユーザーのカウント値を集計
          usersSnapshot.forEach((userDoc) => {
            const userData = userDoc.data();
            if (userData.count) {
              totalScore += userData.count;
            }
          });

          // トータルスコアを商店街のドキュメントに保存
          const storeRef = doc(db, "stores", storeName);
          await updateDoc(storeRef, { score: totalScore });
          console.log(`Total score for ${storeName}: ${totalScore}`);
        }
      };

      // トータルスコアを計算し、Firestoreに保存
      await calculateAndStoreTotalScore();

      // ユーザー情報を保存
      setUserInfo({
        name: user.displayName,
        address: user.email,
        icon: user.photoURL,
        userId: user.uid,
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
      AppImage={"./images/Google.png"}
      onClick={handleGoogleLogin}
    />
  );
};

export default GoogleLoginButton;
