// SubConPatentCertifInfo.tsx
import React, { useState, useEffect } from "react";
import mockData from "../../../../mock/subcontractorInfo.json";
import * as S from "./style";
import ConstructionHistory from "./Table/ConstructionHistory/ConstructionHistory";
import ConstructionAbilityEvaluation from "./Table/ConstructionAbilityEvaluation/ConstructionAbilityEvaluation";
import ConstructionMain from "./Table/ConstructionMain/ConstructionMain";
import ConstructionProgress from "./Table/ConstructionProgress/ConstructionProgress";

interface SubConPeformanceInfoProps {
  companyName: string;
}

const SubConPerformanceInfo: React.FC<SubConPeformanceInfoProps> = ({
  companyName,
}) => {
  const [performanceInfo, setperformanceInfo] = useState<any>(null);

  useEffect(() => {
    // companyName과 일치하는 데이터를 찾습니다.
    const dataItem = mockData.find(
      (item) => item["기업 개요"]["companyName"] === companyName
    );
    if (dataItem) {
      setperformanceInfo(dataItem["시공실적"]);
    }
  }, [companyName]);

  // performanceInfo가 없으면 아무 것도 렌더링하지 않음
  if (!performanceInfo) {
    return <div>Loading or no data found...</div>;
  }
  return (
    <>
      <S.TableComponent>
        <S.TableTitle>주력 항목</S.TableTitle>
        <S.LargeContainer>
          <ConstructionMain data={performanceInfo["주력 항목"]} />
        </S.LargeContainer>
      </S.TableComponent>

      <S.TableComponent>
        <S.TableTitle>공사 진행 현황</S.TableTitle>
        <S.LargeContainer>
          <ConstructionProgress data={performanceInfo["공사 현황"]} />
        </S.LargeContainer>
      </S.TableComponent>

      <S.TableComponent>
        <S.TableTitle>3개년 시공능펵 평가액/순위</S.TableTitle>
        <S.LargeContainer>
          <ConstructionAbilityEvaluation
            data={performanceInfo["시공 능력 평가액"]}
          />
        </S.LargeContainer>
      </S.TableComponent>

      <S.TableComponent>
        <S.TableTitle>3개년 공사 실적</S.TableTitle>
        <S.LargeContainer>
          <ConstructionHistory data={performanceInfo["3개년 공사 실적"]} />
        </S.LargeContainer>
      </S.TableComponent>
    </>
  );
};

export default SubConPerformanceInfo;
