"use client";
import styled from "styled-components";

type objType = {
  [key: string]: string | number;
};

const standard: objType = {
  companyname: "",
  operation: 8,
  finance: 20,
  esg_safety: 5,
  performance: 20,
  total: 75,
  result: "탈락",
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
  width: 95%;
  border-collapse: separate;
  border-spacing: 0;
  margin-left: 40px;
  margin-top: 80px;
  border-radius: 5px;
  border: 0.5px solid #dddddd;
  overflow: hidden;
`;

export const Th = styled.th<CellProps>`
  border-top: 0.5px solid #dddddd;
  border-bottom: 0.5px solid #dddddd;
  text-align: ${({ columname }) =>
    columname === "total" || columname === "result" || columname === "details"
      ? "center"
      : "left"};
  border-left: ${({ columname }) =>
    columname === "total" || columname === "result" || columname === "details"
      ? "2px dotted #dddddd"
      : ""};
  width: ${({ columname }) =>
    columname === "total" || columname === "result" ? "100px" : ""};
  padding: 10px;
  background-color: #f5f7fa; /* 회색 배경 */
`;

export const Td = styled.td<CellProps>`
  border-top: 0.5px solid #dddddd;
  border-bottom: 0.5px solid #dddddd;
  text-align: ${({ columname }) =>
    columname === "total" || columname === "result" || columname === "details"
      ? "center"
      : "left"};
  border-left: ${({ columname }) =>
    columname === "total" || columname === "result" || columname === "details"
      ? "2px dotted #dddddd"
      : ""};
  width: ${({ columname }) =>
    columname === "total" || columname === "result" ? "100px" : ""};
  padding: 10px;
`;

export const headerLetter = styled.div`
  margin-left: 5px;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 600;
  color: black;
  white-space: nowrap;
`;

export const contentLetter = styled.div<ScoreBoxProps>`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 200;
  white-space: nowrap;

  color: ${({ column, score }) => {
    if (
      column === "total" ||
      column == "operation" ||
      column == "finance" ||
      column == "esg_safety" ||
      column == "performance"
    ) {
      const scoreNum = score ? parseInt(score) : 0; // 문자열을 숫자로 변환
      const standardScore = Number(standard[column]);
      return scoreNum < standardScore ? "#F56C6C" : "#409EFF"; // 기본 색상 반환
    } else if (column === "result") {
      const result = score ? String(score) : "";
      const standardResult = String(standard[column]);
      return result == standardResult ? "#F56C6C" : "#409EFF";
    }
  }};

  ${({ column }) => {
    if (column === "companyname") {
      return `
        text-align: left;
        color: #606266;
        font-weight: bold;
        margin-left: 5px;
      `;
    } else if (column === "total" || column === "result") {
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
  white-space: nowrap;
  float: left;
`;
