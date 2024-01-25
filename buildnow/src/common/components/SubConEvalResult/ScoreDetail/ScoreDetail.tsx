import React, { useState, useEffect } from "react";
import * as S from "./style";
import companyEvalValues from "../../../../../mock/companyevalvalue.json";
import companyEvalScore from "../../../../../mock/companyevalscore.json";
import companyEvalTotalScoreData from "../../../../../mock/companyevaltotalscore.json";

interface ScoreDetailProps {
  companyName: string;
  evalItemDetail: string;
}

interface CompanyValue {
  companyName: string;
  [key: string]: string;
}

interface TotalScore {
  [detail: string]: number;
}

// companyEvalTotalScoreData를 TotalScore 타입으로 타입 단언
const companyEvalTotalScore: TotalScore =
  companyEvalTotalScoreData as TotalScore;

interface CompanyEvalScore {
  companyName: string;
  [key: string]: string | number;
}

const ScoreDetail: React.FC<ScoreDetailProps> = ({
  companyName,
  evalItemDetail,
}) => {
  const [value, setValue] = useState<string>("");
  const [score, setScore] = useState<string>("");
  const [isBelowThreshold, setisBelowThreshold] = useState(false);

  useEffect(() => {
    // Find company value for evalItemDetail
    const companyValue = companyEvalValues.find(
      (c) => c.companyName === companyName
    ) as CompanyValue;
    const detailValue = companyValue ? companyValue[evalItemDetail] : "";
    setValue(detailValue);

    // Calculate total score and company score for evalItemDetail
    const totalScore = companyEvalTotalScore[evalItemDetail] || 0;

    const companyData = companyEvalScore.find(
      (item) => item.companyName === companyName
    ) as CompanyEvalScore;

    const companyScore =
      companyData && typeof companyData[evalItemDetail] === "number"
        ? (companyData[evalItemDetail] as number)
        : 0;

    const threshold = companyScore < totalScore * 0.6;
    setisBelowThreshold(threshold)

    // Format the score string
    setScore(`${companyScore}/${totalScore}`);
  }, [companyName, evalItemDetail]);

  return (
    <S.Container>
      <S.Item>{evalItemDetail}</S.Item>
      <S.Value>
        <S.ValueBox>{value}</S.ValueBox>
      </S.Value>
      <S.Score>
      <S.ScoreBox isBelowThreshold={isBelowThreshold}>{score}</S.ScoreBox>
      </S.Score>
    </S.Container>
  );
};

export default ScoreDetail;
