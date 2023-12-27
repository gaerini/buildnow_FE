"use client";

import React from "react";
import TableComponent from "../../common/components/ScoringTable/ScoringTable";

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

const HomePage: React.FC = () => {
  return <TableComponent data={tableData} />;
};

export default HomePage;
