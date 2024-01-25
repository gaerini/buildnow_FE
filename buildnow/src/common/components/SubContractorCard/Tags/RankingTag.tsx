import React from "react";
import { RankingTagStyled } from "../style";

type RankingTagProps = {
  ranking: number;
};

type getRankingTextProps = {
  ranking: number;
};

const getRankingText: React.FC<getRankingTextProps> = ({ ranking }) => {
  // Determine the ranking text based on 시평액
  // Placeholder logic, needs to be adjusted
  if (ranking <= 1) return "1%이내";
  if (ranking <= 3) return "3%이내";
  if (ranking <= 5) return "5%이내";
  if (ranking <= 10) return "10%이내";
  if (ranking <= 15) return "15%이내";
  if (ranking <= 20) return "20%이내";
  if (ranking <= 30) return "30%이내";
  if (ranking <= 40) return "40%이내";
  if (ranking <= 50) return "50%이내";
  return "50%이외";
};

const RankingTag: React.FC<RankingTagProps> = ({ ranking }) => {
  return (
    <RankingTagStyled $rank={ranking}>
      {getRankingText({ ranking })}
    </RankingTagStyled>
  );
};

export default RankingTag;
