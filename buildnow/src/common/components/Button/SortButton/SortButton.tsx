import React from "react";
import * as XLSX from "xlsx";
import SortIcon from "../../../components/Icon/svgs/SortIcon.svg";
import * as S from "./style";

// React component using TypeScript
const SortButton: React.FC = () => {
  return (
    <S.Button>
      <span className="button-text">정렬</span>
      <SortIcon className="button-icon" />
    </S.Button>
  );
};

export default SortButton;
