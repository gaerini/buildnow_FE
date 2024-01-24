// style.ts
"use client";
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 60rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  margin: 1rem 0;
`;

export const TableContainer = styled.table`
  width: calc(50% - 1.5rem);
  border-collapse: collapse;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
`;

export const TableRowHeader = styled.tr`
  background-color: #f9fafa;
`;

export const TableData = styled.td`
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.3rem 2rem 0.3rem 2rem;
  text-align: center;
  color: #335c64;
  border-bottom: 1px dashed #d9d9d9;
  background-color: white;
  &:last-child {
    border: none;
  }
`;

export const TableHeaderData = styled.th`
  font-size: 1.1rem;
  height: 2.5rem;
  padding: 0.3rem;
  text-align: center;
  background-color: #f9fafa;
  border-bottom: 1px dashed #d9d9d9;
  font-weight: normal;
`;
