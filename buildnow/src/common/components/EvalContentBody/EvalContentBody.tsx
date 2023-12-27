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

type Props = {
  icon: JSX.Element;
  item: TableData;
  column: string;
};

const ContentBody: React.FC<Props> = ({ icon, item, column }) => {
  return (
    <>
      <S.Group>
        {icon}
        <div>{column}</div>
      </S.Group>
      <D.ScoreBox score={item.operation} column={"operation"}>
        <D.contentLetter score={item.operation} column={"operation"}>
          {item.operation}
        </D.contentLetter>
      </D.ScoreBox>
    </>
  );
};

export default ContentBody;
