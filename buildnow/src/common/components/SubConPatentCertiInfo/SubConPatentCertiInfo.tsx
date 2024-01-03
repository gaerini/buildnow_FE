// SubConPatentCertifInfo.tsx
import React, { useState, useEffect } from "react";
import data from "../../../../mock/subcontractorInfo.json";
import * as S from "./style";
import LicenseTable from "./Table/LicenseTable";
import PatentTable from "./Table/PatentTable";
import AuthTable from "./Table/AuthTable";
import QualitySafetyTable from "./Table/QualitySafetyTable";

const SubConPatentCertifInfo = () => {
  const patentCerti = data["기술 및 인증 현황"];
  return (
    <>
      <S.TableComponent>
        <S.TableTitle>면허 현황</S.TableTitle>
        <S.LargeContainer>
          <LicenseTable data={patentCerti["면허 현황"]} />
        </S.LargeContainer>
      </S.TableComponent>
      <S.TableComponent>
        <S.TableTitle>특허 정보</S.TableTitle>
        <S.LargeContainer>
          <PatentTable data={patentCerti["특허 정보"]} />
        </S.LargeContainer>
      </S.TableComponent>
      <S.TableComponent>
        <S.TableTitle>기업 인증 정보</S.TableTitle>
        <S.LargeContainer>
          <AuthTable data={patentCerti["기업 인증"]} />
        </S.LargeContainer>
      </S.TableComponent>
      <S.TableComponent>
        <S.TableTitle>품질안전 인증 정보</S.TableTitle>
        <S.LargeContainer>
          <QualitySafetyTable data={patentCerti["품질안전 인증"]} />
        </S.LargeContainer>
      </S.TableComponent>
    </>
  );
};

export default SubConPatentCertifInfo;
