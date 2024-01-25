import { useState } from "react";
import React from "react";
import WorkTypeTag from "../SubContractorCard/Tags/WorkType";
import AddressTag from "../SubContractorCard/Tags/AddressTag";
import RankingTag from "../SubContractorCard/Tags/RankingTag";
import NewTag from "../SubContractorCard/Tags/NewTag";
import PatentTag from "../SubContractorCard/Tags/PatentTag";
import RecTag from "../SubContractorCard/Tags/RecTag";
import * as S from "./style";
import simpleInfo from "../../../../mock/simpleInfo.json";
import SubConFinanceInfo from "../SubConFinanceInfo/SubConFinanceInfo";
import SubConPatentCertifInfo from "../SubConPatentCertiInfo/SubConPatentCertiInfo";
import SubConPerformanceInfo from "../SubConPerformanceInfo/SubConPerformanceInfo";
import SubConOverview from "../SubConOverview/SubConOverview";
import OperationDoc from "../Document/OperationDoc";
import FinanceDoc from "../Document/FinanceDoc";
import PatentCertiDoc from "../Document/PatentCertiDoc";
import PerformanceDoc from "../Document/PerformanceDoc";

// Define the tab names
const tabNames = {
  overview: "기업개요",
  operation: "경영일반",
  finance: "재무부문",
  tech: "기술 및 인증 현황",
  performance: "시공실적",
  // others: "기타",
};

// Create a type for the tab keys
type TabKey = keyof typeof tabNames;

// Define the prop types for CompanyPage component
type CompanyPageProps = {
  companyName: string;
};

const CompanyPage = ({ companyName }: CompanyPageProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const subConData = simpleInfo.find(
    (item) => item.companyName === companyName
  );

  if (!subConData) return <div>데이터를 찾을 수 없습니다.</div>;

  const ranking = parseFloat(subConData.시평액.replace("%", "")); // "%" 제거 후 숫자 변환

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        console.log(`${companyName} 기업개요 상세 페이지`);
        return <SubConOverview companyName={companyName} />;
      case "operation":
        console.log(`${companyName} 경영일반 상세 페이지`);
        return <OperationDoc companyName={companyName} />;
      case "finance":
        console.log(`${companyName} 재무부문 상세 페이지`);
        // return <>{companyName} 재무부문 상세페이지</>;
        return (
          <S.VerticalContainer>
            <FinanceDoc companyName={companyName} />
            <SubConFinanceInfo companyName={companyName} />
          </S.VerticalContainer>
        );
      case "tech":
        console.log(`${companyName} 기술 및 인증 상세 페이지`);
        // return <>{companyName} 기술 및 인증 상세페이지</>;
        return (
          <S.VerticalContainer>
            <PatentCertiDoc companyName={companyName} />
            <SubConPatentCertifInfo companyName={companyName} />
          </S.VerticalContainer>
        );
      case "performance":
        console.log(`${companyName} 기업 시공실적 상세 페이지`);
        return (
          <S.VerticalContainer>
            <PerformanceDoc companyName={companyName} />
            <SubConPerformanceInfo companyName={companyName} />
          </S.VerticalContainer>
        );
      // case "others":
      //   console.log(`${companyName} 기타 상세 페이지`);
      //   return <>{companyName} 기타 상세페이지</>;
      default:
        return "내용을 선택해주세요.";
    }
  };

  return (
    <S.PageContainer>
      <S.CompanyNameContainer>
        <S.InfoContainer>
          <S.CompanyLabel>업체명</S.CompanyLabel>
          <S.CompanyName>{companyName}</S.CompanyName>
        </S.InfoContainer>
        <S.TagAndResultContainer>
          <S.TagContainer>
            {subConData.신규 && <NewTag />}
            <AddressTag address={subConData.소재지} />
            <RankingTag ranking={ranking} />
          </S.TagContainer>
          <S.ResultContainer>
            <S.Score>{subConData.점수}점</S.Score>
            <S.PassStatus isPassed={subConData.통과여부}>
              {subConData.통과여부 ? "통 과" : "탈 락"}
            </S.PassStatus>
          </S.ResultContainer>
        </S.TagAndResultContainer>
      </S.CompanyNameContainer>
      <S.TabsContainer>
        {(Object.keys(tabNames) as TabKey[]).map((tabKey) => (
          <S.Tab
            key={tabKey}
            isActive={activeTab === tabKey}
            onClick={() => setActiveTab(tabKey)}
          >
            {tabNames[tabKey]}
          </S.Tab>
        ))}
      </S.TabsContainer>
      <S.ContentContainer>{renderContent()}</S.ContentContainer>
    </S.PageContainer>
  );
};

export default CompanyPage;
