"use client";
// LargeTableStyle.ts
import styled from "styled-components";
import { TableRow } from "../CommonStyle";

export const LargeTableContainer = styled.table`
  width: 40.425rem; // 수정됨
  height: 9.1875rem; // 수정됨
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const LargeTableWrapper = styled.div`
  width: 40.425rem; // 수정됨
  height: 9.1875rem; // 수정됨
  border-radius: 0.1875rem; // 수정됨
  overflow: hidden;
  border: 0.6px solid #8d8d8d; // 수정됨
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
`;

export const LargeTableData = styled.td<{
  isFirstColumn?: boolean;
  rowIndex?: number;
  isLastRow?: boolean;
}>`
  font-size: 0.8rem; //수정됨
  padding: 0.375rem; // 수정됨
  text-align: center;
  color: ${(props) =>
    props.rowIndex === 0 || props.isFirstColumn ? "black" : "#335c64"};
  border: 1px dashed #d9d9d9;
  background-color: ${(props) =>
    props.rowIndex === 0 || props.isFirstColumn ? "#f9fafa" : "none"};

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }

  ${(props) => props.isLastRow && `border-bottom: none;`}
`;

export const TableRowHeader = styled(TableRow)`
  font-weight: bold;
`;

export const TableHeaderData = styled.th<{ isHeaderRow?: boolean }>`
  width: 5.775rem; // 수정됨
  height: 1.5rem; // 수정됨
  padding: 0.375rem; // 수정됨
  font-size: 0.85rem; //수정됨
  border: 1px dashed #d9d9d9;
  text-align: center;
  background-color: #f9fafa;
  font-weight: normal;
  border-top: none;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;

export const TableHeader = styled.div`
  width: 40.425rem; // 수정됨
  font-size: 0.75rem; // 수정됨
  padding-right: 0.85rem; // 수정됨
  text-align: right;
  color: #333;
  align-items: center;
  margin-bottom: 0.225rem;
`;
