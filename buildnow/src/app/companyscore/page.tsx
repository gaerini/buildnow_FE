"use client";

import React from "react";
import TableComponent from "../../common/components/ScoringTable/ScoringTable";
import ReviewScoreCardButton from "../../common/components/Button/ReviewScoreCardButton/ReviewScoreCardButton";

type TableDataProps = {
  companyname: string;
  operation: string;
  finance: string;
  esg_safety: string;
  performance: string;
  total: string;
  result: string;
  details: React.ReactNode;
};

// JSON 파일에서 데이터를 불러오고, React 컴포넌트로 변환하는 함수
const loadAndTransformData = (TableData: TableDataProps[]) => {
  return TableData.map((item) => ({
    ...item,
    details: <ReviewScoreCardButton />, // React 컴포넌트로 details 필드를 대체
  }));
};

const tableData: TableDataProps[] = loadAndTransformData(
  require("../../../mock/tablescore.json")
);

const HomePage: React.FC = () => {
  return <TableComponent data={tableData} />;
};

export default HomePage;
