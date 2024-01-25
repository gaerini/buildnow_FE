// style.ts
"use client";
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 45rem; // 수정됨
  gap: 2.25rem; // 수정됨
  margin: 0.75rem 0; // 수정됨
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TableContainer = styled.table`
  width: calc(50% - 1.125rem); //수정됨
  border-collapse: collapse;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1); //수정됨
  border-radius: 0.225rem; // 수정됨
`;

export const TableRowHeader = styled.tr`
  background-color: #f9fafa;
`;

export const TableData = styled.td`
  box-sizing: border-box;
  font-size: 0.75rem; // 수정됨
  padding: 0.225rem 1.5rem 0.225rem 1.5rem; // 수정됨
  text-align: center;
  color: #335c64;
  border-bottom: 1px dashed #d9d9d9;
  background-color: white;
  &:last-child {
    border: none;
  }
`;

export const TableHeaderData = styled.th`
  font-size: 0.825rem; // 수정됨
  height: 1.875rem; // 수정됨
  padding: 0.225rem; // 수정됨
  text-align: center;
  background-color: #f9fafa;
  border-bottom: 1px dashed #d9d9d9;
  font-weight: normal;
`;
