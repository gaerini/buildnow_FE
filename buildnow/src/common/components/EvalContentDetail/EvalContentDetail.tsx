import React from "react";
import * as S from "../EvalContent/style";
import * as D from "../ScoringTable/style";

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

const ContentDetail = ({ item }: { item: TableData }) => {
  return (
    <>
      <S.Detailcomp>
        - 법인 설립 년수
        <D.ScoreBox score={item.operation} column={"operation"}>
          <D.contentLetter score={"7/40"} column={"operation"}>
            {" 7 / 40"}
          </D.contentLetter>
        </D.ScoreBox>
      </S.Detailcomp>
    </>
  );
};

export default ContentDetail;
