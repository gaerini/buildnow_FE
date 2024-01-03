import React from "react";
import { useEffect, useState } from "react";
import OverallIcon from "./overall.svg";
import DetailIcon from "./detailToggle.svg";

import ContentBody from "../EvalContentBody/EvalContentBody";
import ContentDetail from "../EvalContentDetail/EvalContentDetail";

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

type Props = {
  icon: JSX.Element;
  data: TableData[];
  column: string;
};

const ScoreDetails: React.FC<Props> = ({ icon: Icon, data, column }) => {
  const item = data[0];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Body>
        <ContentBody icon={Icon} item={item} column={column} />
        <DetailIcon onClick={() => setIsOpen(!isOpen)} />
      </S.Body>
      <S.DetailsArea isOpen={isOpen}>
        {/* 상세 점수 내역이 들어갈 부분 */}
        <ContentDetail item={item} />
        <ContentDetail item={item} />
        <ContentDetail item={item} />
      </S.DetailsArea>
    </>
  );
};

export default ScoreDetails;
