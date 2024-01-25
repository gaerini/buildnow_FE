"use client";

import React, { useState } from "react";
import NavBar from "@/common/components/NewLeftNavBar/NewLeftNavBar";
import TopBar from "@/common/components/TopBar/TopBar";

import CheckBox from "@/common/components/Icon/svgs/CheckBox.svg";
import ScoreIcon from "@/common/components/Icon/svgs/ScoreIcon.svg";
import CompanyScore from "../companyscore/page";
import * as S from "./style";
import WorkTypeDropDown from "@/common/components/WorkTypeDropDown/WorkTypeDropDown";
import DownLoadExcel from "@/common/components/Button/DownLoadExcel/DownLoadExcel";
import SearchArea from "@/common/components/Button/SearchArea/SearchArea";
import SortButton from "@/common/components/Button/SortButton/SortButton";

const items = [
  { name: "지원 현황", icon: <ScoreIcon /> },
  { name: "지원 결과", icon: <CheckBox /> },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("지원 현황");
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };
  return (
    <>
      <S.CompanyInfoWindowWrapper>
        <NavBar
          items={items}
          handleItemClick={handleItemClick}
          activeItem={activeItem}
        />
        <S.MainContent>
          <TopBar activeItem={activeItem}></TopBar>
          <div style={{ width: "100%" }}>
            <S.ButtonsContainer>
              <WorkTypeDropDown />
              <DownLoadExcel />
              <SortButton />
              <SearchArea />
            </S.ButtonsContainer>
            <S.TableContainer>
              <CompanyScore />
            </S.TableContainer>
          </div>
        </S.MainContent>
      </S.CompanyInfoWindowWrapper>
    </>
  );
};

export default Sidebar;
