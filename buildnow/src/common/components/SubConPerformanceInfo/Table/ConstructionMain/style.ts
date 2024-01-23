// TableStyle.ts
"use client";
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 60rem;
  display: flex; // Use flexbox to layout the two tables
  justify-content: space-between; // Space out the tables
  align-items: flex-start; // Align tables to the top
  gap: 3rem; // Gap between the two tables
  margin: 1rem 0;
`;

export const TableContainer = styled.table`
  width: calc(50% - 1.5rem); // Adjust the width of each table to fill the space
  border-collapse: collapse;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  height: 6rem;
`;

export const TableRowHeader = styled.tr`
  font-weight: bold;
  height: 2.5rem;
`;

export const TableData = styled.td`
  font-size : 1rem;
  padding: 0.3rem;
  text-align: center;
  color: #335C64;
  border: 1px dashed #d9d9d9;––
  background-color: none;
  border-bottom: none;

  &:first-child {
    border-left: none;
    white-space: nowrap;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  &:last-child {
    border-right: none;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }
`;

export const TableHeaderData = styled.th`
  font-size: 0.95rem;
  border: 1px dashed #d9d9d9;
  padding: 0.3rem;
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
