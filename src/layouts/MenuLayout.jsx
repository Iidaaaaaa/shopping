import React, { useState } from "react";
import Menu from "../components/Menu";
import CheckInfo from "../components/CheckInfo";
import CheckIn from "../components/Checkin";
import Setting from "../components/setting";
import Search from "../components/Search";
import InfoArt from "../components/InfoArt";
import AdminLayout from "../components/AdminLayout";

const MenuLayout = ({ userInfo }) => {
  const [currentPage, setCurrentPage] = useState("menu");

  const renderPage = () => {
    switch (currentPage) {
      case "checkinfo":
        return <CheckInfo setCurrentPage={setCurrentPage} />;
      case "checkin":
        return <CheckIn setCurrentPage={setCurrentPage} />;
      case "setting":
        return <Setting setCurrentPage={setCurrentPage} />;
      case "search":
        return <Search setCurrentPage={setCurrentPage} />;
      case "admin":
        return <AdminLayout setCurrentPage={setCurrentPage} />;
      case "Article":
        return <InfoArt setCurrentPage={setCurrentPage} />;
      default:
        return <Menu setCurrentPage={setCurrentPage} userInfo={userInfo} />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default MenuLayout;
