// TableStyle.ts
"use client";
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 53.9rem;
  height: 12.25rem;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

export const TableContainer = styled.table`
  width: 53.9rem;
  height: 12.25rem;
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const TableRowHeader = styled.tr`
  font-weight: bold;
  &:first-child {
    background-color: #f9fafa;
  }
`;

export const TableData = styled.td`
font-size : 0.9rem;
  padding: 0.5rem;
  text-align: center;
  color: #335C64;
  border: 1px dashed #d9d9d9;––
  background-color: none;
  border-bottom: none;

  &:first-child {
    border-left: none;
    width: 2rem;
  }

  &:last-child {
    border-right: none;
  }
`;

export const TableHeaderData = styled.th`
  font-size: 0.95rem;
  border: 1px dashed #d9d9d9;
  padding: 0.5rem;
  text-align: center;
  background-color: #f9fafa;
  font-weight: normal;
  border-top: none;

  &:first-child {
    border-left: none;
    width: 2rem;
  }

  &:last-child {
    border-right: none;
  }
`;

// Scoped styled components for AuthTable
export const AuthTableData = styled(TableData)`
  &:first-child,
  &:nth-child(3) {
    width: 20.2125rem;
    background-color: #f9fafa;
  }

  &:nth-child(2),
  &:last-child {
    width: 6.7375rem;
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
    width: 20.2125rem;
  }

  &:nth-child(2),
  &:last-child {
    width: 6.7375rem;
  }

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;
