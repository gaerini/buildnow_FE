"use client";

import { useState } from "react";
import DetailInfoTab from "../../common/components/DetailInfoTab/DetailInfoTab";
import SubContractorCard from "@/common/components/SubContractorCard/SubContractorCard";
import WorkTypeDropDown from "@/common/components/WorkTypeDropDown/WorkTypeDropDown";

// mockData에서 companyName 받아와야함!

const companyName: string = "L이앤씨";

export default function subContractorDetailInfo() {
  return (
    <>
      <DetailInfoTab companyName="L이앤씨" />
      <SubContractorCard />
      <WorkTypeDropDown />
    </>
  );
}
