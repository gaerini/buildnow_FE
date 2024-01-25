"use client";
// MiddleTableStyle.ts
import styled from "styled-components";

export const MiddleTableContainer = styled.table`
  width: 24.25rem;
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const MiddleTableWrapper = styled.div`
  width: 24.25rem;
  height: 20rem;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
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
