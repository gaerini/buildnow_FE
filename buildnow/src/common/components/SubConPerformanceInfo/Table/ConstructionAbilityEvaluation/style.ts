// TableStyle.ts
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 53.9rem;
  border-radius: 0.3rem;
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

export const TableContainer = styled.table`
  width: 53.9rem;
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
  padding: 0.3rem;
  text-align: center;
  color: #335C64;
  border: 1px dashed #d9d9d9;––
  background-color: none;
  border-bottom: none;
  height : 1.5rem;

  &:first-child {
    border-left: none;
    white-space: nowrap;
  }

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    width: 8rem;
  }

  &:nth-child(5) {
    width: 7.5rem;
  }

  &:last-child {
    width: 7.5rem;
    border-right: none;
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
  height: 1.2 rem;

  &:first-child {
    border-left: none;
    width: 8rem;
  }
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    width: 8rem;
  }

  &:nth-child(5) {
    width: 7.5rem;
  }

  &:last-child {
    width: 7.5rem;
    border-right: none;
  }
`;
