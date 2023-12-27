import React from "react";
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

// 스코어 카드 컴포넌트
const ScoreCard = ({ data }: { data: TableData[] }) => {
  const item = data[0];

  return (
    <S.Header>
      <div>{item.companyname} 의 배점 결과</div>
      <S.ScoreCardContainer>
        <S.ScoreCard>
          <div>총 점수</div>
          <S.ScoreText>{item.total}</S.ScoreText>
          <div>통과 여부</div>
          <S.Statusdiv>{item.state}</S.Statusdiv>
        </S.ScoreCard>
      </S.ScoreCardContainer>
    </S.Header>
  );
};

export default ScoreCard;
