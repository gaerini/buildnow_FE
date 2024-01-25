// TableStyle.ts
"use client";
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 45rem; // 수정됨
  gap: 2.25rem; // 수정됨
  margin: 0.75rem 0; // 수정됨
  display: flex; // Use flexbox to layout the two tables
  justify-content: space-between; // Space out the tables
  align-items: flex-start; // Align tables to the top
`;

export const TableContainer = styled.table`
  width: calc(50% - 1.125rem); //수정됨
  border-collapse: collapse;
  border: 0.6px solid #8d8d8d;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1); //수정됨
  border-radius: 0.225rem; //수정됨
  height: 4.5rem; // 수정됨
`;

export const TableRowHeader = styled.tr`
  font-weight: bold;
  height: 1.875rem; // 수정됨
`;

export const TableData = styled.td`
font-size: 0.9rem; // 수정됨
padding: 0.225rem; // 수정됨
  text-align: center;
  color: #335C64;
  border: 1px dashed #d9d9d9;––
  background-color: none;
  border-bottom: none;

  &:first-child {
    border-left: none;
    white-space: nowrap;
    border-top-left-radius: 0.225rem; // 수정됨
    border-bottom-left-radius: 0.225rem; // 수정됨
  }

  &:last-child {
    border-right: none;
    border-top-left-radius: 0.225rem; // 수정됨
    border-bottom-left-radius: 0.225rem; // 수정됨
  }
`;

export const TableHeaderData = styled.th`
  font-size: 0.825rem; // 수정됨
  padding: 0.225rem; // 수정됨
  height: 1.5rem; // 수정됨
  border: 1px dashed #d9d9d9;
  text-align: center;
  background-color: #f9fafa;
  font-weight: normal;
  border-top: none;
  white-space: nowrap;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;
