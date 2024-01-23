"use client";
// LargeTableStyle.ts
import styled from "styled-components";
import { TableRow } from "../CommonStyle";

export const LargeTableContainer = styled.table`
  width: 53.9rem;
  height: 12.25rem;
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const LargeTableWrapper = styled.div`
  width: 53.9rem;
  height: 12.25rem;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const LargeTableData = styled.td<{
  isFirstColumn?: boolean;
  rowIndex?: number;
  isLastRow?: boolean;
}>`
  padding: 0.5rem;
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
  width: 7.7rem;
  height: 2rem;
  border: 1px dashed #d9d9d9;
  padding: 0.5rem;
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
  width: 53.9rem;
  font-size: 0.6rem;
  text-align: right;
  padding-right: 1rem;
  color: #333;
  align-items: center;
  margin-bottom: 0.3rem;
`;
