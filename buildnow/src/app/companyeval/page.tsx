"use client";

import React from "react";
import EvalBar from "../../common/components/EvalBar/EvalBar";
import EvalContent from "../../common/components/EvalContent/EvalContent";

import OverallIcon from "../../common/components/EvalContent/overall.svg";
import Finance from "../../common/components/EvalContent/finance.svg";
import EsgSafety from "../../common/components/EvalContent/esgSafety.svg";
import Record from "../../common/components/EvalContent/record.svg";

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

const Home = () => {
  return (
    <S.EvalBar>
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
        <EvalContent icon={<Finance />} data={tableData} column={"재무 정보"} />
        <EvalContent
          icon={<EsgSafety />}
          data={tableData}
          column={"ESG / 안전"}
        />
        <EvalContent icon={<Record />} data={tableData} column={"시공 실적"} />
      </S.Container>
    </S.EvalBar>
  );
};

export default Home;
