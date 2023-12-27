"use client";

import { useState } from "react";
import LeftNavBar from "../../common/components/LeftNavBar/LeftNavBar";
import TopBar from "@/common/components/TopBar/TopBar";
import DetailInfoTab from "../../common/components/DetailInfoTab/DetailInfoTab";

import * as S from "./style";

export default function CompanyInfo() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const selectedMenuHandler = (menuName: string) => {
    setSelectedMenu(menuName);
    // console.log(menuName);
  };

  const data = require("../../../mock/profile.json");
  return (
    <>
      <S.CompanyInfoWindowWrapper>
        <LeftNavBar
          company={data.company}
          companyLogoImg={data.companyLogoImg}
          onChange={selectedMenuHandler}
        />
        <TopBar tabname={selectedMenu}></TopBar>
      </S.CompanyInfoWindowWrapper>
    </>
  );
}
