import React from "react";
import { useEffect, useState } from "react";
import OverallIcon from "./overall.svg";
import DetailIcon from "./detailToggle.svg";
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

const ScoreDetails = ({ data }: { data: TableData[] }) => {
  const item = data[0];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Header>
        <div>평가 항목</div>
        <div>평가 점수</div>
        <div>자세히 보기</div>
      </S.Header>
      <div>
        <img src={OverallIcon} alt="Overall" />
        <span>기업 개요</span>
        <S.ScoreArea>{item.operation}</S.ScoreArea>
        <img src={DetailIcon} alt="Detail" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <S.DetailsArea isOpen={isOpen}>
        {/* 상세 점수 내역이 들어갈 부분 */}
        <div>통과 여부: {item.state}</div>
      </S.DetailsArea>
    </S.Container>
  );
};

export default ScoreDetails;
