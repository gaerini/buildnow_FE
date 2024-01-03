"use client";

import React from "react";
//Component
import EvalBar from "../../common/components/CompanyEvalRightBar/EvalBar/EvalBar";
import EvalContent from "../../common/components/CompanyEvalRightBar/EvalContent/EvalContent";
import CorrectScoreCardButton from "@/common/components/Button/CorrectScoreCardButton/CorrectScoreCardButton";
import ReviewCompleteButton from "@/common/components/Button/ReviewCompleteButton/ReviewCompleteButton";
//Icon
import OverallIcon from "../../common/components/CompanyEvalRightBar/EvalContent/overall.svg";
import Finance from "../../common/components/CompanyEvalRightBar/EvalContent/finance.svg";
import EsgSafety from "../../common/components/CompanyEvalRightBar/EvalContent/esgSafety.svg";
import Record from "../../common/components/CompanyEvalRightBar/EvalContent/record.svg";

import * as S from "./style";

type TableData = {
  companyname: string;
  operation: string;
  finance: string;
  esg_safety: string;
  others: string;
  total: string;
  result: string;
  state: string;
};

const tableData: TableData[] = require("../../../mock/tablescore.json");

// //try
// import { useState } from "react";
// import LeftNavBar from "../../common/components/LeftNavBar/LeftNavBar";
// import * as D from "../companyInfo/style";

// const data = require("../../../mock/profile.json");

const Home = () => {
  // const [selectedMenu, setSelectedMenu] = useState("Home");

  // const selectedMenuHandler = (menuName: string) => {
  //   setSelectedMenu(menuName);
  //   // console.log(menuName);
  // };
  return (
    <>
      {/* <D.CompanyInfoWindowWrapper>
        <LeftNavBar
          company={data.company}
          companyLogoImg={data.companyLogoImg}
          onChange={selectedMenuHandler}
        />
      </D.CompanyInfoWindowWrapper> */}
      <S.EvalBar>
        <CorrectScoreCardButton />
        <EvalBar data={tableData} />
        <S.Container>
          <S.Header>
            <div>평가 항목</div>
            <div>평가 점수</div>
            <div>자세히 보기</div>
          </S.Header>
          <EvalContent
            icon={<OverallIcon />}
            data={tableData}
            column={"기업 개요"}
          />
          <EvalContent
            icon={<Finance />}
            data={tableData}
            column={"재무 정보"}
          />
          <EvalContent
            icon={<EsgSafety />}
            data={tableData}
            column={"ESG / 안전"}
          />
          <EvalContent
            icon={<Record />}
            data={tableData}
            column={"시공 실적"}
          />
        </S.Container>
        <ReviewCompleteButton />
      </S.EvalBar>
    </>
  );
};

export default Home;
