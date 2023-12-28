// MiddleSizeTable.tsx

import React from "react";
import * as S from "./style";
import * as C from "../CommonStyle";

interface FinancialRatio {
  [year: string]: number;
}

interface MiddleSizeTableProps {
  data: FinancialRatio;
  name: string;
}

const MiddleSizeTable: React.FC<MiddleSizeTableProps> = ({ name, data }) => {
  const MiddleSizeTableData = Object.entries(data).map(([year, value]) => ({
    연도: year,
    값: value,
  }));

  return (
    <C.IndividualTableComponent>
      <S.TableHeader>
        <S.HeaderSquare />
        {name}
      </S.TableHeader>
      <S.MiddleTableWrapper>
        <S.MiddleTableContainer>
          <C.TableRow>
            {MiddleSizeTableData.map((item, index) => (
              <S.MiddleTableData key={index}>{item.연도}</S.MiddleTableData>
            ))}
          </C.TableRow>
          <C.TableRow>
            {MiddleSizeTableData.map((item, index) => (
              <S.MiddleTableData key={index}>{item.값} %</S.MiddleTableData>
            ))}
          </C.TableRow>
        </S.MiddleTableContainer>
      </S.MiddleTableWrapper>
    </C.IndividualTableComponent>
  );
};

export default MiddleSizeTable;
