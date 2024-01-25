"use client";
// MiddleTableStyle.ts
import styled from "styled-components";

export const MiddleTableContainer = styled.table`
  width: 18.1875rem; // 수정됨
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1); //수정
`;

export const MiddleTableWrapper = styled.div`
  width: 18.1875rem; // 수정됨
  height: 15rem; // 수정됨
  border-radius: 0.1875rem; // 수정됨
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1); //수정
`;

export const TableHeader = styled.div`
  width: 18.1875rem; // 수정됨
  font-size: 0.85rem; // 수정됨
  text-align: left;
  padding: 0.375rem; //수정
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.375rem; //수정
  margin-bottom: 0.15rem; //수정
`;

export const HeaderSquare = styled.span`
  width: 0.375rem; //수정
  height: 0.375rem; //수정
  background-color: #5a5a5a;
  border-radius: 0.075rem; //수정
  display: inline-block;
`;
