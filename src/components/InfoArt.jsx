import React from "react";
const InfoArt = ({ setCurrentPage }) => {
  return (
    <div>
      <div className="bg-customBg w-full">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("checkinfo")}
            className="pt-14 pb-3 flex "
          >
            <img src="/public/images/angle-left.svg" alt="右矢印" />
            <p className=" mx-auto text-white">お知らせ詳細</p>
          </div>
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <div className="max-w-xs mt-6 mx-auto pb-5 ">
          <p className="text-customDay">2024/9/18 10:50</p>
          <h4 className="mb-5">システムメンテナンスのお知らせ</h4>
          <p>
            【日時】2024年9月22日 02:00 - 04:00
            【内容】システムの安定性向上のため、定期メンテナンスを実施いたします。この時間帯はサービスが一時的に利用できなくなります。
            メンテナンス後は、システムのパフォーマンスが向上し、より快適にご利用いただける予定です。ご不便をおかけしますが、ご理解のほどよろしくお願いいたします。
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoArt;
