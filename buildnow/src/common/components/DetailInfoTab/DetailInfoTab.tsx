import { useState } from "react";
import * as S from "./style";
import SubConFinanceInfo from "../SubConFinanceInfo/SubConFinanceInfo";
import SubConPatentCertifInfo from "../SubConPatentCertiInfo/SubConPatentCertiInfo";

// Define the tab names
const tabNames = {
  overview: "기업개요",
  finance: "재무부문",
  tech: "기술 및 인증 현황",
  performance: "시공실적",
  others: "기타",
};

// Create a type for the tab keys
type TabKey = keyof typeof tabNames;

// Define the prop types for CompanyPage component
type CompanyPageProps = {
  companyName: string;
};

const CompanyPage = ({ companyName }: CompanyPageProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        console.log(`${companyName} 기업개요 상세 페이지`);
        return <>{companyName} 기업개요 상세 페이지</>;
      case "finance":
        console.log(`${companyName} 재무부문 상세 페이지`);
        return <SubConFinanceInfo />;
      case "tech":
        console.log(`${companyName} 기술 및 인증 상세 페이지`);
        return <SubConPatentCertifInfo />;
      case "performance":
        console.log(`${companyName} 기업개시공실적요 상세 페이지`);
        return <>{companyName} 시공실적 상세페이지</>;
      case "others":
        console.log(`${companyName} 기타 상세 페이지`);
        return <>{companyName} 기타 상세페이지</>;
      default:
        return "내용을 선택해주세요.";
    }
  };

  return (
    <S.PageContainer>
      <S.CompanyNameContainer>{companyName}</S.CompanyNameContainer>
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
