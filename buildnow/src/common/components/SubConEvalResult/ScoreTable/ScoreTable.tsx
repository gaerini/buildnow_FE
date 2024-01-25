import React, { useState, useEffect } from "react";
import * as S from "./style";
import ScoreDetailBox from "../ScoreDetail/ScoreDetail"; // ScoreDetailBox 컴포넌트를 import합니다.
import totalScoreData from "../../../../../mock/companyevaltotalscore.json";
import evalItemDetails from "../../../../../mock/companyevalitem.json";
import companyEvalScore from "../../../../../mock/companyevalscore.json";

interface ScoreTableProps {
  companyName: string;
  evalItem: string;
}

interface CompanyEvalScore {
  companyName: string;
  [key: string]: string | number;
}

const ScoreTable: React.FC<ScoreTableProps> = ({ companyName, evalItem }) => {
  const [totalScore, setTotalScore] = useState<number>(0);
  const [score, setScore] = useState<string>("");
  const [evalItemDetailList, setEvalItemDetailList] = useState<string[]>([]);

  useEffect(() => {
    const score = (totalScoreData as Record<string, number>)[evalItem];
    setTotalScore(score);

    const companyData = companyEvalScore.find(
      (item) => item.companyName === companyName
    ) as CompanyEvalScore;

    const companyScore =
      companyData && typeof companyData[evalItem] === "number"
        ? (companyData[evalItem] as number)
        : 0;

    setScore(`${companyScore}점 / ${score}점`);

    const details = evalItemDetails;
    const itemDetails = (details as Record<string, string[]>)[evalItem];
    setEvalItemDetailList(itemDetails || []);
  }, [evalItem, companyName]);

  return (
    <S.EvalItemScoreContainer>
      <S.ScoreTable>
        <S.EvalItemBox>
          {evalItem}
          <S.TotalScoreBox>{`${totalScore} 점`}</S.TotalScoreBox>
        </S.EvalItemBox>
        <S.ScoreDetailBoxWrapper>
          {evalItemDetailList.map((detail, index) => (
            <ScoreDetailBox
              key={index}
              companyName={companyName}
              evalItemDetail={detail}
            />
          ))}
        </S.ScoreDetailBoxWrapper>
      </S.ScoreTable>
      <S.SumScore>{score}</S.SumScore>
    </S.EvalItemScoreContainer>
  );
};

export default ScoreTable;
