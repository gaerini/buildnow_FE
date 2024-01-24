"use client";
import styled from "styled-components";

export const selectedMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
  transition: opacity 0.4s ease-in-out;
`;

export const selectedMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90px;
  gap: 5px;
`;

export const selectedMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px 50px;
  box-sizing: border-box;
  border-bottom: 2px solid #d4d4d8;
  height: 90px;
  width: 100%;
`;
