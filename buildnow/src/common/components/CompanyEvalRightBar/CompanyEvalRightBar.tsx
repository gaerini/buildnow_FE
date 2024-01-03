"use client";

import React from "react";
//Component
import EvalBar from "./EvalBar/EvalBar";
import EvalContent from "./EvalContent/EvalContent";
import CorrectScoreCardButton from "../Button/CorrectScoreCardButton/CorrectScoreCardButton";
import ReviewCompleteButton from "../Button/ReviewCompleteButton/ReviewCompleteButton";
//Icon
import OverallIcon from "./EvalContent/overall.svg";
import Finance from "./EvalContent/finance.svg";
import EsgSafety from "./EvalContent/esgSafety.svg";
import Record from "./EvalContent/record.svg";

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

const tableData: TableData[] = require("../../../../mock/tablescore.json");

const Home = () => {
  return (
    <>
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
