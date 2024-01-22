// SubConPatentCertifInfo.tsx
import React, { useState, useEffect } from "react";
import mockData from "../../../../mock/subcontractorInfo.json";
import * as S from "./style";
import LicenseTable from "./Table/LicenseTable";
import PatentTable from "./Table/PatentTable";
import AuthTable from "./Table/AuthTable";
import QualitySafetyTable from "./Table/QualitySafetyTable";


// Props 타입 정의
interface SubConPatentCertiInfoProps {
  companyName: string;
}

const SubConPatentCertifInfo: React.FC<SubConPatentCertiInfoProps> = ({
  companyName,
}) => {
  const [patentCertiInfo, setpatentCertiInfoInfo] = useState<any>(null);

  useEffect(() => {
    // companyName과 일치하는 데이터를 찾습니다.
    const dataItem = mockData.find(
      (item) => item["기업 개요"]["companyName"] === companyName
    );
    if (dataItem) {
      setpatentCertiInfoInfo(dataItem["기술 및 인증 현황"]);
    }
  }, [companyName]);

  if (!patentCertiInfo) {
    return <div>Loading or no data found...</div>;
  }
  return (
    <>
      <S.TableComponent>
        <S.TableTitle>면허 현황</S.TableTitle>
        <S.LargeContainer>
          <LicenseTable data={patentCertiInfo["면허 현황"]} />
        </S.LargeContainer>
      </S.TableComponent>
      <S.TableComponent>
        <S.TableTitle>특허 정보</S.TableTitle>
        <S.LargeContainer>
          <PatentTable data={patentCertiInfo["특허 정보"]} />
        </S.LargeContainer>
      </S.TableComponent>
      <S.TableComponent>
        <S.TableTitle>기업 인증 정보</S.TableTitle>
        <S.LargeContainer>
          <AuthTable data={patentCertiInfo["기업 인증"]} />
        </S.LargeContainer>
      </S.TableComponent>
      <S.TableComponent>
        <S.TableTitle>품질안전 인증 정보</S.TableTitle>
        <S.LargeContainer>
          <QualitySafetyTable data={patentCertiInfo["품질안전 인증"]} />
        </S.LargeContainer>
      </S.TableComponent>
    </>
  );
};

export default SubConPatentCertifInfo;
