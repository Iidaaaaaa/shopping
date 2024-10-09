import React from "react";
import Card from "../components/Card";

const Trending = () => {
  return (
    <div>
      <div className="bg-customBg w-full">
        <div className="max-w-xs mx-auto">
          <div className="pt-14 pb-3 flex items-center mx-auto w-fit">
            <img
              className="mr-1"
              src="/public/images/trending.svg"
              alt="右矢印"
            />
            <p className=" text-white">急上昇</p>
          </div>
        </div>
      </div>
      <div className="mb-40">
        <Card
          CardTitle={"大須商店街"}
          CardText={
            "定番の名古屋グルメはもちろんのこと、行列のできるB級グルメや多国籍レストラン、カフェなどの飲食店がずらり。地…"
          }
          CardBtnText={"特色の項目"}
          CardScore={"1,023"}
          CardImage={"/images/oosu.png"}
        />
        <Card
          CardTitle={"円頓寺商店街"}
          CardText={
            "円頓寺商店街は、名古屋駅のほど近くにある、古き良き下町情緒と、新しい文化が融合した魅力あふれる商店街です。…"
          }
          CardBtnText={"特色の項目"}
          CardScore={"1,201"}
          CardImage={"/images/endoji.png"}
        />
        <Card
          CardTitle={"SAKUMACHI商店街"}
          CardText={
            "SAKUMACHI商店街は、名鉄瀬戸線「尼ケ坂」駅と「清水」駅間の高架下に新しくできた商店街。飲食店をはじめ様々な…"
          }
          CardBtnText={"特色の項目"}
          CardScore={"243"}
          CardImage={"/images/sakumachi.png"}
        />
      </div>
    </div>
  );
};

export default Trending;
