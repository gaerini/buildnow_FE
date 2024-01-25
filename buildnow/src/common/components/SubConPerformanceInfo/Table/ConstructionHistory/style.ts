// TableStyle.ts
"use client";
import styled from "styled-components";

export const TableWrapper = styled.div`
width: 45rem; // 수정됨
margin: 0.75rem 0; // 수정됨
  border-radius: 0.225rem; //수정됨
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1); //수정됨
`;

export const TableContainer = styled.table`
width: 45rem; // 수정됨
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1); //수정됨
`;

export const TableRowHeader = styled.tr`
  font-weight: bold;
  height: 1.5rem; // 수정됨
  &:first-child {
    background-color: #f9fafa;
  }
`;

export const TableData = styled.td`
font-size: 0.75rem; // 수정됨
padding: 0.225rem; // 수정됨
height: 1.275rem; // 수정됨
  text-align: center;
  color: #335C64;
  border: 1px dashed #d9d9d9;––
  background-color: none;
  border-bottom: none;

  &:first-child {
    border-left: none;
    white-space: nowrap;
  }

  &: nth-child(2) {
    width: 1.875rem; //수정됨
  }
  
  &: nth-child(7) {
    width: 3.75rem; //수정됨
  }

  &:last-child {
    border-right: none;
  }
`;

export const TableHeaderData = styled.th`
font-size: 0.825rem; // 수정됨
height: 1.5rem; // 수정됨
padding: 0.225rem; // 수정됨
  border: 1px dashed #d9d9d9;
  text-align: center;
  background-color: #f9fafa;
  font-weight: normal;
  border-top: none;
  white-space: nowrap;

  &:first-child {
    border-left: none;
    width: 6rem; //수정됨
  }
  &: nth-child(2) {
    width: 1.875rem; //수정됨
  }

  &: nth-child(7) {
    width: 3.75rem; //수정됨
  }

  &:last-child {
    border-right: none;
  }
`;
