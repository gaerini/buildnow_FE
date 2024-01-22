"use client";

import { useState } from "react";
import LeftNavBar from "../../common/components/LeftNavBar/LeftNavBar";
import TopBar from "@/common/components/TopBar/TopBar";
import DetailInfoTab from "../../common/components/DetailInfoTab/DetailInfoTab";

import * as S from "./style";
import EvalQueue from "@/common/components/EvalQueue/EvalQueue";
import EvalStageBar from "@/common/components/EvalStageBar/EvalStageBar";

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

        <S.NavAndTopBarContainer>
          <TopBar tabname={selectedMenu} />
          <S.ContentContainer>
            <EvalStageBar />
            <EvalQueue />
          </S.ContentContainer>
        </S.NavAndTopBarContainer>
      </S.CompanyInfoWindowWrapper>
    </>
  );
}
