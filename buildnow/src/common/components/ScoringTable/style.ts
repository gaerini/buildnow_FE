"use client";
import styled from "styled-components";

type objType = {
  [key: string]: string | number;
};

const standard: objType = {
  companyname: "",
  operation: 25,
  finance: 20,
  esg_safety: 10,
  others: 0,
  total: 75,
  result: "",
  state: "",
};

interface ScoreBoxProps {
  score?: string; // score가 undefined일 수도 있으므로 optional로 선언합니다.
  column: string;
  //   keyof typeof standard;
}

interface CellProps {
  columname: string;
}

/* components/TableComponent.css */
export const table = styled.table`
  width: 80%;
  border-collapse: separate;
  border-spacing: 0;
  margin-left: 200px;
  margin-top: 200px;
  border-radius: 5px;
  border: 0.5px solid #dddddd;
  overflow: hidden;
`;

export const Th = styled.th<CellProps>`
  border-top: 0.5px solid #dddddd;
  border-bottom: 0.5px solid #dddddd;
  ${({ columname }) =>
    columname === "total" || columname === "result" || columname === "state"
      ? "text-align: center; border-left: 2px dotted #dddddd;"
      : "text-align: left;"};
  padding: 10px;
  background-color: #f5f7fa; /* 회색 배경 */
`;

export const Td = styled.td<CellProps>`
  border-top: 0.5px solid #dddddd;
  border-bottom: 0.5px solid #dddddd;
  ${({ columname }) =>
    columname === "total" || columname === "result" || columname === "state"
      ? "text-align: center; border-left: 2px dotted #dddddd;"
      : "text-align: left;"};
  padding: 10px;
`;

export const headerLetter = styled.div`
  margin-left: 5px;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 600;
  color: black;
`;

export const contentLetter = styled.div<ScoreBoxProps>`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 200;
  color: ${({ column, score }) => {
    const scoreNum = score ? parseInt(score) : 0; // 문자열을 숫자로 변환
    const standardScore = Number(standard[column]);
    if (
      column === "total" &&
      (Number(standard["operation"]) < 0 || Number(standard["finance"]) < 0)
    ) {
      return "#F56C6C"; // 조건에 따라 다른 색상 반환
    }

    return scoreNum < standardScore ? "#F56C6C" : "#409EFF"; // 기본 색상 반환
  }};

  ${({ column }) => {
    if (column === "companyname") {
      return `
        text-align: left;
        color: #606266;
        font-weight: bold;
        margin-left: 5px;
      `;
    } else if (column === "total") {
      return `
        font-weight: bold;
      `;
    }
  }}
`;

export const ScoreBox = styled.div<ScoreBoxProps>`
  ${({ column, score }) => {
    const scoreNum = score ? parseInt(score) : 0; // 문자열을 숫자로 변환
    const standardScore = Number(standard[column]);
    return scoreNum < standardScore
      ? "background-color: #ffe8e8; border: 1px solid #FDE2E2"
      : "background-color: #e8f4fc; border: 1px solid #d9ecff";
  }};
  border-radius: 5px; /* 테두리 둥글게 */
  padding: 2px 8px; /* 패딩 */

  float: left;
`;
