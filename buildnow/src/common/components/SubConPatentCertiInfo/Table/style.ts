// TableStyle.ts
"use client";
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 45rem; // 수정됨
  height: 9.1875rem; // 수정됨
  border-radius: 0.1875rem; // 수정됨
  margin: 0.75rem 0; // 수정됨
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
`;

export const TableContainer = styled.table`
  width: 45rem; // 수정됨
  height: 9.1875rem; // 수정됨
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1); // 수정됨
`;

export const TableRowHeader = styled.tr`
  font-weight: bold;
  &:first-child {
    background-color: #f9fafa;
  }
`;

export const TableData = styled.td`
font-size: 0.75rem; // 수정됨
  padding: 0.375rem; // 수정됨
  text-align: center;
  color: #335C64;
  border: 1px dashed #d9d9d9;––
  background-color: none;
  border-bottom: none;

  &:first-child {
    border-left: none;
    width: 1.5rem;
  }

  &:last-child {
    border-right: none;
  }
`;

export const TableHeaderData = styled.th`
  font-size: 0.75rem; // 수정됨
  padding: 0.375rem; // 수정됨
  border: 1px dashed #d9d9d9;
  text-align: center;
  background-color: #f9fafa;
  font-weight: 450;
  border-top: none;

  &:first-child {
    border-left: none;
    width: 1.5rem; //수정됨
  }

  &:last-child {
    border-right: none;
  }
`;

// Scoped styled components for AuthTable
export const AuthTableData = styled(TableData)`
  &:first-child,
  &:nth-child(3) {
    width: 15.159375rem; // 수정됨
    background-color: #f9fafa;
  }

  &:nth-child(2),
  &:last-child {
    width: 5.052625rem; // 수정됨
  }

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;

export const AuthTableHeaderData = styled(TableHeaderData)`
  &:first-child,
  &:nth-child(3) {
    width: 15.159375rem; // 수정됨
  }

  &:nth-child(2),
  &:last-child {
    width: 5.052625rem; // 수정됨
  }

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;
