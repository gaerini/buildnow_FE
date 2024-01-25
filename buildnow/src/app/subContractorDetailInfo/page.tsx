"use client";

import { useState } from "react";
import DetailInfoTab from "../../common/components/DetailInfoTab/DetailInfoTab";
import SubConEvalResult from "@/common/components/SubConEvalResult/SubConEvalResult";
import * as S from "./style";
import SubContractorCard from "@/common/components/SubContractorCard/SubContractorCard";
import WorkTypeDropDown from "@/common/components/WorkTypeDropDown/WorkTypeDropDown";
import ComapynInfo from "../companyInfo/page";
import LeftNavBar from "@/common/components/LeftNavBar/LeftNavBar";
import CompanyEvalRightBar from "@/common/components/CompanyEvalRightBar/CompanyEvalRightBar";
import EvalQueue from "@/common/components/EvalQueue/EvalQueue";

// 추출한 데이터를 SubConData 인터페이스 타입의 객체로 저장합니다.
export default function subContractorDetailInfo() {
  return (
    <S.ContentPage>
      <DetailInfoTab companyName="L이앤씨" />
      <SubConEvalResult companyName="L이앤씨" />
    </S.ContentPage>
  );
}
