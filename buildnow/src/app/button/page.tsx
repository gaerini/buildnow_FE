"use client";

import DownButton from "@/common/components/Button/DownLoadExcel/DownLoadExcel";
import SortButton from "@/common/components/Button/SortButton/SortButton";
import SearchArea from "@/common/components/Button/SearchArea/SearchArea";
import PassFilterButton from "@/common/components/Button/PassFilterButton/PassFilterButton";
import FailFilterButton from "@/common/components/Button/FailFilterButton/FailFilterButton";

export default function CompanyInfo() {
  return (
    <>
      <DownButton />
      <SortButton />
      <SearchArea />
      <PassFilterButton />
      <FailFilterButton />
    </>
  );
}
