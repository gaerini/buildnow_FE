// MiddleTableStyle.ts
import styled from "styled-components";
import * as Common from "../CommonStyle";

export const MiddleTableContainer = styled.table`
  width: 24.25rem;
  height: 5.875rem;
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const MiddleTableWrapper = styled.div`
  width: 24.25rem;
  height: 5.875rem;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const MiddleTableData = styled.td`
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem;
  weight: bold;
  border-right: 1px dashed #d9d9d9;

  &:last-child {
    border-right: none;
  }

  border-bottom: none;
`;

export const TableHeader = styled.div`
  width: 24.25rem;
  font-size: 1rem;
  text-align: left;
  padding: 0.5rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
`;

export const HeaderSquare = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #5a5a5a;
  border-radius: 0.1rem;
  display: inline-block;
`;
