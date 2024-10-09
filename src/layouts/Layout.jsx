import React, { useState } from "react";
import Footer from "../components/Footer";
import RankingLayout from "./RankingLayout";
import MapLayout from "./MapLayout";
import MenuLayout from "./MenuLayout";
import Trending from "../components/Trending";
import ScanLayout from "./ScanLayout";
import Toplogin from "../components/Toplogin";

const Layouts = () => {
  const [currentPage, setCurrentPage] = useState("Toplogin");
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: null,
    address: "",
    icon: "",
    email: "",
  });

  const handleSignIn = (uid) => {
    setUserId(uid);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Toplogin":
        return (
          <Toplogin setCurrentPage={setCurrentPage} setUserInfo={setUserInfo} />
        );
      case "ranking":
        return <RankingLayout />;
      case "menu":
        return <MenuLayout userInfo={userInfo} />; // ここで userInfo を渡す
      case "QRCodeReader":
        return <ScanLayout />;
      case "trending":
        return <Trending />;
      case "map":
      default:
        return <MapLayout />;
    }
  };

  return (
    <div>
      {renderPage()}
      {currentPage !== "Toplogin" && <Footer setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default Layouts;
