// React와 필요한 컴포넌트들을 import합니다.
import React from "react";
import SubContractorCard from "../SubContractorCard/SubContractorCard";
import * as S from "./style";
import mockData from "../../../../mock/subcontractorInfo.json"; // mock 데이터를 불러옵니다.

// 필요한 데이터 타입을 정의합니다.
type SubConData = {
  companyName: string;
  시평액: string;
  소재지: string;
  공종: string;
  신규: boolean;
  특허: boolean;
  임원진추천: boolean;
  지원날짜: string;
};

// 데이터를 추출하는 함수를 정의합니다.
const extractRequiredData = (data: any[]): SubConData[] => {
  return data.map((item) => {
    const {
      companyName,
      시평액,
      소재지,
      공종,
      신규,
      특허,
      임원진추천,
      지원날짜,
    } = item["기업 개요"];
    return {
      companyName,
      시평액,
      소재지,
      공종,
      신규,
      특허,
      임원진추천,
      지원날짜,
    };
  });
};

// 추출된 데이터를 사용하는 EvalQueue 컴포넌트를 정의합니다.
const EvalQueue: React.FC = () => {
  const subConData = extractRequiredData(mockData);

  return (
    <S.QueueContainer>
      {subConData.map((data, index) => (
        <SubContractorCard key={index} subConData={data} />
      ))}
    </S.QueueContainer>
  );
};

export default EvalQueue;
