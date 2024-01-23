import React from "react";
import Basic from "./Table/Basic";
import Introduction from "./Table/Introduction";
import History from "./Table/History";
import * as S from "./style"; // 스타일 임포트

interface SubConOverviewProps {
  companyName: string;
}

const SubConOverview = ({ companyName }: SubConOverviewProps) => {
  return (
    <div>
      <S.TableTitle>기본 사항</S.TableTitle>
      <Basic companyName={companyName} />

      <S.TableTitle>회사 소개</S.TableTitle>
      <Introduction companyName={companyName} />

      <S.TableTitle>회사 주요 연혁</S.TableTitle>
      <History companyName={companyName} />
    </div>
  );
};

export default SubConOverview;
