import React from "react";
import * as XLSX from "xlsx";
import DownLoadIcon from "../../../components/Icon/svgs/Excel.svg";
import * as S from "./style";

const downloadExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "my_sheet");
  XLSX.writeFile(workbook, "json_to_excel.xlsx");
};

// React component using TypeScript
const DownloadButton: React.FC = () => {
  return (
    <S.Button onClick={downloadExcel}>
      <span className="button-text">엑셀로 내려 받기</span>
      <DownLoadIcon className="button-icon" />
    </S.Button>
  );
};

export default DownloadButton;
