"use client";
// SmallTableStyle.ts
import styled from "styled-components";
import * as Common from "../CommonStyle";

export const SmallTableContainer = styled.table`
height: 7.5rem; // 수정됨
width: 9.375rem; // 수정됨
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
`;

export const SmallTableWrapper = styled.div`
width: 9.375rem; // 수정됨
height: 7.5rem; // 수정됨
  border-radius: 0.1875rem; // 수정됨
  overflow: hidden;
  border: 0.8px solid #8d8d8d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const SmallTableRow = styled(Common.TableRow)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    background-color: #f9fafa;
    height: 23%;
    color: black;
    font-size : 0.8rem; //수정됨
  }

  &:nth-child(2) {
    height: 67%;
    font-size: 1.875rem; //수정됨
    color: #335c64;
  }
`;
