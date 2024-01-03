// SubConPatentCertifInfo.tsx
import React, { useState, useEffect } from "react";
import data from "../../../../mock/subcontractorInfo.json";
import * as S from "./style";
import ConstructionHistory from "./Table/ConstructionHistory/ConstructionHistory";
import ConstructionAbilityEvaluation from "./Table/ConstructionAbilityEvaluation/ConstructionAbilityEvaluation";
import ConstructionMain from "./Table/ConstructionMain/ConstructionMain";
import ConstructionProgress from "./Table/ConstructionProgress/ConstructionProgress";

const SubConPatentCertifInfo = () => {
  const performance = data["시공실적"];
  return (
    <>
      <S.TableComponent>
        <S.TableTitle>주력 항목</S.TableTitle>
        <S.LargeContainer>
          <ConstructionMain data={performance["주력 항목"]} />
        </S.LargeContainer>
      </S.TableComponent>

      <S.TableComponent>
        <S.TableTitle>공사 진행 현황</S.TableTitle>
        <S.LargeContainer>
          <ConstructionProgress data={performance["공사 현황"]} />
        </S.LargeContainer>
      </S.TableComponent>

      <S.TableComponent>
        <S.TableTitle>3개년 시공능펵 평가액/순위</S.TableTitle>
        <S.LargeContainer>
          <ConstructionAbilityEvaluation
            data={performance["시공 능력 평가액"]}
          />
        </S.LargeContainer>
      </S.TableComponent>

      <S.TableComponent>
        <S.TableTitle>3개년 공사 실적</S.TableTitle>
        <S.LargeContainer>
          <ConstructionHistory data={performance["3개년 공사 실적"]} />
        </S.LargeContainer>
      </S.TableComponent>
    </>
  );
};

export default SubConPatentCertifInfo;
