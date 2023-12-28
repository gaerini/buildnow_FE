// LargeSizeTable.tsx

import React from "react";
import * as S from "./style";
import * as C from "../CommonStyle";

interface FinancialData {
  [year: string]: number;
}

interface LargeSizeTableProps {
  totalAssets: FinancialData;
  totalLiabilities: FinancialData;
  totalEquity: FinancialData;
  sales: FinancialData;
  operatingIncome: FinancialData;
  netIncome: FinancialData;
}

const financialItems: { [key: string]: string } = {
  totalAssets: "총자산",
  totalLiabilities: "부채총계",
  totalEquity: "자본총계",
  sales: "매출액",
  operatingIncome: "영업이익",
  netIncome: "당기순이익",
};

const LargeSizeTable: React.FC<LargeSizeTableProps> = ({
  totalAssets,
  totalLiabilities,
  totalEquity,
  sales,
  operatingIncome,
  netIncome,
}) => {
  const years = Object.keys(totalAssets).sort((a, b) => b.localeCompare(a));

  const getItemValue = (
    item: keyof typeof financialItems,
    year: string
  ): number => {
    const dataMap: { [key in keyof typeof financialItems]: FinancialData } = {
      totalAssets,
      totalLiabilities,
      totalEquity,
      sales,
      operatingIncome,
      netIncome,
    };
    return dataMap[item][year] || 0; // 또는 적절한 기본값
  };

  return (
    <C.IndividualTableComponent>
      <S.TableHeader>(단위:백만원)</S.TableHeader>
      <S.LargeTableWrapper>
        <S.LargeTableContainer>
          <thead>
            <tr>
              {/* 0번째 행의 모든 헤더 셀에 배경색 적용 */}
              <S.TableHeaderData>결산기준일</S.TableHeaderData>
              {Object.keys(financialItems).map((item) => (
                <S.TableHeaderData key={item}>
                  {financialItems[item]}
                </S.TableHeaderData>
              ))}
            </tr>
          </thead>
          <tbody>
            {years.map((year, rowIndex) => (
              <tr key={year}>
                {/* 1, 2, 3번째 행의 0번째 셀에만 배경색 적용 */}
                <S.LargeTableData
                  isFirstColumn={true}
                  isLastRow={rowIndex === years.length - 1}
                >
                  {year}
                </S.LargeTableData>
                {Object.keys(financialItems).map((item, colIndex) => (
                  <S.LargeTableData
                    key={item}
                    isLastRow={rowIndex === years.length - 1}
                  >
                    {getItemValue(item as keyof typeof financialItems, year)}
                  </S.LargeTableData>
                ))}
              </tr>
            ))}
          </tbody>
        </S.LargeTableContainer>
      </S.LargeTableWrapper>
    </C.IndividualTableComponent>
  );
};

export default LargeSizeTable;
