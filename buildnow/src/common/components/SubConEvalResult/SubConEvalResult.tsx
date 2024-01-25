import React from "react";
import ScoreTable from "./ScoreTable/ScoreTable"
import * as S from "./style";

interface SubConEvalResultProps {
  companyName: string;
}

const SubConEvalResult: React.FC<SubConEvalResultProps> = ({ companyName }) => {
  return (
    <S.PageContainer>
      <S.CompanyNameContainer>
        <S.CompanyNameText>{companyName}</S.CompanyNameText>
      </S.CompanyNameContainer>
      <S.ScoreTableContainer>
        <S.Header>
          <S.HeaderSection>평가 항목</S.HeaderSection>
          <S.HeaderSection>평가 요소</S.HeaderSection>
          <S.HeaderSection>평가 점수</S.HeaderSection>
        </S.Header>
        <ScoreTable companyName={companyName} evalItem="경영 일반"/>
        <ScoreTable companyName={companyName} evalItem="재무 부문"/>
        <ScoreTable companyName={companyName} evalItem="인증 현황"/>
        <ScoreTable companyName={companyName} evalItem="시공 실적"/>
      </S.ScoreTableContainer>
    </S.PageContainer>
  );
};

export default SubConEvalResult;
