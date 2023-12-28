// SmallSizeTable.tsx

import React from "react";
import * as S from "./style";
import * as C from "../CommonStyle";

interface SmallSizeTableProps {
  data: string;
  name: string;
}

const SmallSizeTable: React.FC<SmallSizeTableProps> = ({ name, data }) => {
  return (
    <C.IndividualTableComponent>
      <S.SmallTableWrapper>
        <S.SmallTableContainer>
          <S.SmallTableRow>{name}</S.SmallTableRow>
          <S.SmallTableRow>{data}</S.SmallTableRow>
        </S.SmallTableContainer>
      </S.SmallTableWrapper>
    </C.IndividualTableComponent>
  );
};

export default SmallSizeTable;
