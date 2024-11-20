import React, { useState } from "react";
import SearchIcon from "../assets/icons/SearchIcon";
import CardMore from "../components/CardMore";

const cards = [
  {
    id: 1,
    title: "大須商店街",
    text: "定番の名古屋グルメはもちろんのこと、行列のできるB級グルメや多国籍レストラン、カフェなどの飲食店がずらり。地…",
    btnText: "電車",
    purpose: "飲食店",
    score: "1,023",
    image: "/images/oosu.png",
  },
  {
    id: 2,
    title: "円頓寺商店街",
    text: "円頓寺商店街は、名古屋駅のほど近くにある、古き良き下町情緒と、新しい文化が融合した魅力あふれる商店街です。",
    btnText: "バス",
    purpose: "サブカルチャー",
    score: "1,201",
    image: "/images/endoji.png",
  },
  {
    id: 3,
    title: "SAKUMACHI商店街",
    text: "SAKUMACHI商店街は、名鉄瀬戸線「尼ケ坂」駅と「清水」駅間の高架下に新しくできた商店街。飲食店をはじめ様々な…",
    btnText: "徒歩",
    purpose: "歴史",
    score: "243",
    image: "/images/sakumachi.png",
  },
];

const Search = ({ setCurrentPage }) => {
  const [keyword, setKeyword] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleKeywordChange = (event) => {
    const newKeyword = event.target.value;
    setKeyword(newKeyword);
    filterCards(newKeyword, selectedCategory);
  };

  const handleCategoryClick = (category) => {
    setKeyword(category);
    setSelectedCategory(category);
    filterCards(category, category);
  };

  const clearKeyword = () => {
    setKeyword("");
    setFilteredCards(cards);
  };

  const filterCards = (keyword, category) => {
    const lowercasedKeyword = keyword.toLowerCase();
    const newFilteredCards = cards.filter((card) => {
      const matchesKeyword =
        card.title.toLowerCase().includes(lowercasedKeyword) ||
        card.btnText.toLowerCase().includes(lowercasedKeyword) ||
        card.purpose.toLowerCase().includes(lowercasedKeyword) ||
        card.score.toLowerCase().includes(lowercasedKeyword);
      const matchesCategory = category
        ? card.btnText === category || card.purpose === category
        : true;
      return matchesKeyword && matchesCategory;
    });
    setFilteredCards(newFilteredCards);
  };

  return (
    <div className="min-h-screen">
      <div className="w-full bg-customBg">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("CheckInfo")}
            className="flex pb-3 pt-14"
          >
            <img src="./images/angle-left.svg" alt="右矢印" />
            <p className="mx-auto text-white">探す</p>
          </div>
        </div>
      </div>
      {/* Search Input */}
      <div className="relative max-w-xs mx-auto mt-6">
        <input
          className="w-[316px] h-9 bg-[#eaeaea] rounded-[9px] pl-3 pr-10"
          type="text"
          placeholder="キーワードで探す"
          value={keyword}
          onChange={handleKeywordChange}
        />
        {keyword ? (
          <button
            className="absolute text-gray-500 top-2 right-4"
            onClick={clearKeyword}
          >
            x
          </button>
        ) : (
          <SearchIcon
            color={"#929292"}
            width={20}
            height={20}
            classname="absolute top-2 right-4"
          />
        )}
      </div>

      {/* Filtered Cards */}
      {keyword !== "" && (
        <div className="max-w-xs mx-auto mt-6">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div
                key={card.id}
                className="max-w-xs pb-5 mx-auto mt-6 rounded-md shadow-lg"
              >
                <div className="relative">
                  <img
                    className="w-[320px]"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="absolute flex items-center h-5 p-1 bg-white bottom-10 left-2">
                    <img className="mr-1" src="/images/walk2.svg" alt="icon" />
                    <p className="text-sm">{card.score}</p>
                  </div>
                  <p className="absolute flex items-center h-6 p-1 text-xl bg-white bottom-3 left-2">
                    {card.title}
                  </p>
                </div>
                <div className="px-4">
                  <p className="pt-2  line-clamp-3">{card.text}</p>
                  <div className="flex items-center mt-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="flex items-center px-3 py-1 bg-yellow-500 rounded-full">
                        <span className="text-white">{card.btnText}</span>
                      </button>
                      <button className="flex items-center px-3 py-1 bg-yellow-500 rounded-full">
                        <span className="text-white">{card.purpose}</span>
                      </button>
                    </div>
                  </div>
                  <CardMore />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              該当するアイテムが見つかりませんでした。
            </p>
          )}
        </div>
      )}

      {/* Filter Buttons */}
      {keyword === "" && (
        <div className="max-w-xs mx-auto mt-12">
          <h3 className="text-[#513C38] font-bold text-xl">交通手段で探す</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <button
              className="flex items-center px-3 py-1 bg-yellow-500 rounded-full"
              onClick={() => handleCategoryClick("電車")}
            >
              <img className="mr-1" src="./images/dia.svg" alt="" />
              <span className="text-white">電車</span>
            </button>
            <button
              className="flex items-center px-3 py-1 bg-yellow-500 rounded-full"
              onClick={() => handleCategoryClick("徒歩")}
            >
              <img className="mr-1" src="./images/dia.svg" alt="" />
              <span className="text-white">徒歩</span>
            </button>
            <button
              className="flex items-center px-3 py-1 bg-yellow-500 rounded-full"
              onClick={() => handleCategoryClick("バイク")}
            >
              <img className="mr-1" src="./images/dia.svg" alt="" />
              <span className="text-white">バイク</span>
            </button>
            <button
              className="flex items-center px-3 py-1 bg-yellow-500 rounded-full"
              onClick={() => handleCategoryClick("バス")}
            >
              <img className="mr-1" src="./images/dia.svg" alt="" />
              <span className="text-white">バス</span>
            </button>
          </div>
        </div>
      )}
      {keyword === "" && (
        <div className="max-w-xs mx-auto mt-12">
          <h3 className="text-[#513C38] font-bold text-xl">目的で探す</h3>
          <div className="flex flex-wrap mt-3 gap-x-2 gap-y-3">
            <button
              className="flex items-center px-3 py-1 bg-yellow-500 rounded-full"
              onClick={() => handleCategoryClick("飲食店")}
            >
              <img className="mr-1" src="./images/dia.svg" alt="" />
              <span className="text-white">飲食店</span>
            </button>
            <button
              className="flex items-center px-3 py-1 bg-yellow-500 rounded-full"
              onClick={() => handleCategoryClick("歴史")}
            >
              <img className="mr-1" src="./images/dia.svg" alt="" />
              <span className="text-white">歴史</span>
            </button>
            <button
              className="flex items-center px-3 py-1 bg-yellow-500 rounded-full"
              onClick={() => handleCategoryClick("サブカルチャー")}
            >
              <img className="mr-1" src="./images/dia.svg" alt="" />
              <span className="text-white">サブカルチャー</span>
            </button>
            <button
              className="flex items-center px-3 py-1 bg-yellow-500 rounded-full"
              onClick={() => handleCategoryClick("祭り・イベント")}
            >
              <img className="mr-1" src="./images/dia.svg" alt="" />
              <span className="text-white">祭り・イベント</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
