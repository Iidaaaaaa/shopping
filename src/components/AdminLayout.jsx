import React, { useState } from "react";
import { db, storage } from "/firebaseConfig"; // FirestoreとStorageのインポート
import { collection, setDoc, doc } from "firebase/firestore"; // Firestoreの関数をインポート
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Storageの関数をインポート

const AdminLayout = ({ setCurrentPage }) => {
  const [storeName, setStoreName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 画像をFirebase Storageにアップロード
      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Firestoreにデータを保存
      await setDoc(doc(db, "stores", storeName), {
        storeName,
        imageUrl,
        description,
        tags: [tag1.trim(), tag2.trim()].filter((tag) => tag), // タグを配列に変換し、空のタグを除外
      });

      // フォームのリセット
      setStoreName("");
      setImage(null);
      setDescription("");
      setTag1("");
      setTag2("");

      // ページを変更
      setCurrentPage("Ranking");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <div className="bg-customBg w-full">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("CheckInfo")}
            className="pt-14 pb-3 flex "
          >
            <img src="/public/images/angle-left.svg" alt="右矢印" />
            <p className=" mx-auto text-white ">管理者</p>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-auto max-w-xs">
        <h1 className="text-2xl text-center mb-2  ">商店街を追加する</h1>
        <form onSubmit={handleSubmit}>
          <div class="flex flex-col">
            <label class="bg-customBg text-white px-4 py-1 rounded-full mr-2 mb-2 w-fit ">
              商店街名
            </label>

            <input
              class="bg-black text-white"
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>

          <div>
            <label class="bg-customBg text-white px-4 py-1 rounded-full mr-2 mb-2 w-fit">
              画像:
            </label>
            <input
              className="bg-black text-white"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <label>文章:</label>
            <textarea
              className="bg-black text-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>タグ1:</label>
            <input
              className="bg-black text-white"
              type="text"
              value={tag1}
              onChange={(e) => setTag1(e.target.value)}
            />
          </div>
          <div>
            <label>タグ2:</label>
            <input
              className="bg-black text-white"
              type="text"
              value={tag2}
              onChange={(e) => setTag2(e.target.value)}
            />
          </div>
          <button className="border bg-black" type="submit">
            送信
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLayout;
