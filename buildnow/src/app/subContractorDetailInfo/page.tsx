"use client";

import { useState } from "react";
import DetailInfoTab from "../../common/components/DetailInfoTab/DetailInfoTab";
import SubContractorCard from "@/common/components/SubContractorCard/SubContractorCard";
import WorkTypeDropDown from "@/common/components/WorkTypeDropDown/WorkTypeDropDown";
import ComapynInfo from "../companyInfo/page";
import LeftNavBar from "@/common/components/LeftNavBar/LeftNavBar";
import CompanyEvalRightBar from "@/common/components/CompanyEvalRightBar/CompanyEvalRightBar";
import EvalQueue from "@/common/components/EvalQueue/EvalQueue";
// mockData에서 companyName 받아와야함!
const data = require("../../../mock/subcontractorInfo.json");
// 인터페이스를 정의하여 각 속성의 타입을 지정합니다.
// interface SubConBasicData {
//   companyName: string;
//   시평액: string;
//   소재지: string;
//   공종: string;
//   신규: boolean;
//   특허: boolean;
//   임원진추천: boolean;
//   지원날짜: string;
// }

// interface CurrentRatioData {

// }

// 여기는 기존의 배열 구조 분해 할당을 사용하여 데이터를 추출합니다.

// 추출한 데이터를 SubConData 인터페이스 타입의 객체로 저장합니다.
export default function subContractorDetailInfo() {
  return <DetailInfoTab companyName="L이앤씨" />;
}
