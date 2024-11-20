import React, { useState } from "react";
import { db, storage } from "/firebaseConfig";
import { collection, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CustomMenuLayout = ({ setCurrentPage }) => {
  const [storeName, setStoreName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // プレビュー用のステートを追加
  const [description, setDescription] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await setDoc(doc(db, "stores", storeName), {
        storeName,
        imageUrl,
        description,
        tags: [tag1.trim(), tag2.trim()].filter((tag) => tag),
      });

      setStoreName("");
      setImage(null);
      setImagePreview(null); // プレビューをリセット
      setDescription("");
      setTag1("");
      setTag2("");

      setCurrentPage("Ranking");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // プレビュー画像をセット
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-customBg">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("Menu")}
            className="flex pb-3 pt-14"
          >
            <img src="./images/angle-left.svg" alt="右矢印" />
            <p className="mx-auto text-white">管理者ページ</p>
          </div>
        </div>
      </div>

      {/* フォーム入力エリア */}
      <div className="max-w-xs mx-auto mt-20">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 画像選択 */}
          <div className="text-center">
            <div className="relative flex flex-col items-center justify-center w-full h-40 bg-[#d9d9d9] rounded cursor-pointer">
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="プレビュー画像"
                    className="object-cover w-full h-full rounded"
                  />
                ) : (
                  <>
                    <img
                      src="./images/imageSelect.svg"
                      alt="画像アイコン"
                      className="w-12 h-12 mb-2"
                    />
                    <p className="text-white">画像を選択</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* 店舗名入力 */}
          <div>
            <label className="block text-gray-700">商店街名</label>
            <input
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>

          {/* 説明入力 */}
          <div>
            <label className="block text-gray-700">商店街説明文</label>
            <textarea
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* タグ入力 */}
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-gray-700">タグ1</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                type="text"
                value={tag1}
                onChange={(e) => setTag1(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">タグ2</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                type="text"
                value={tag2}
                onChange={(e) => setTag2(e.target.value)}
              />
            </div>
          </div>

          {/* 送信ボタン */}
          <button className="w-full py-2 font-semibold text-white bg-gray-800 rounded hover:bg-gray-700">
            送信
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomMenuLayout;
