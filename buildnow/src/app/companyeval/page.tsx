"use client";

import React from "react";
import ScoreCard from "../../common/components/ScoreEvalBar/EvalBarCore";
import ScoreDetails from "../../common/components/ScoreEvalDetail/ScoreEval";
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
      <ScoreCard data={tableData} />
      <ScoreDetails data={tableData} />
    </S.EvalBar>
  );
};

export default Home;
