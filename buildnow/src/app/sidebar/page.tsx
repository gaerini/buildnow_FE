"use client";

import React, { useState } from "react";
import NavBar from "../../common/components/NewLeftNavBar/NewLeftNavBar";
import TopBar from "@/common/components/TopBar/TopBar";
import CompanyScore from "../companyscore/page";
import * as S from "./style";

const Sidebar: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState("지원 현황");

  const selectedMenuHandler = (menuName: string) => {
    setSelectedMenu(menuName);
    // console.log(menuName);
  };
  return (
    <>
      <S.CompanyInfoWindowWrapper>
        <NavBar />
        <S.MainContent>
          <TopBar tabname={selectedMenu}></TopBar>
          <div style={{ width: "100%" }}>
            <CompanyScore />
          </div>
        </S.MainContent>
      </S.CompanyInfoWindowWrapper>
    </>
  );
};

export default Sidebar;
