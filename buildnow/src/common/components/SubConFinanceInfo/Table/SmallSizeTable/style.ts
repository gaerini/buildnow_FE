"use client";
// SmallTableStyle.ts
import styled from "styled-components";
import * as Common from "../CommonStyle";

export const SmallTableContainer = styled.table`
  height: 10rem;
  width: 12.5rem;
  border-collapse: collapse;
  border: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const SmallTableWrapper = styled.div`
  width: 12.5rem;
  height: 10rem;
  border-radius: 0.25rem;
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
  }

  &:nth-child(2) {
    height: 67%;
    font-size: 1.875rem;
    color: #335c64;
  }
`;
