// TableStyle.ts
import styled from "styled-components";

export const TableContainer = styled.table`
  width: 53.9rem;
  height: 12.25rem;
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const TableWrapper = styled.div`
  width: 53.9rem;
  height: 12.25rem;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const TableData = styled.td`
  padding: 0.5rem;
  text-align: center;
  color:  black;
  border: 1px dashed #d9d9d9;
  background-color: none;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }

`;

export const TableRowHeader = styled.tr`
  font-weight: bold;
  &:first-child {
    background-color: #f9fafa;
  }
`;

export const TableHeaderData = styled.th`
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
