import React from "react";
const InfoArt = ({ setCurrentPage }) => {
  return (
    <div>
      <div className="w-full bg-customBg">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("checkinfo")}
            className="flex pb-3 pt-14 "
          >
            <img src="./images/angle-left.svg" alt="右矢印" />
            <p className="mx-auto text-white ">お知らせ詳細</p>
          </div>
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <div className="max-w-xs pb-5 mx-auto mt-6 ">
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
