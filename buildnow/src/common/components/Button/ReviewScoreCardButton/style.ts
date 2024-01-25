"use client";
// ReviewScoreCardButtonStyle.ts
import styled from "styled-components";
import {
  hoverEffect,
  smallButtonStyles,
  smallStyledIconWrapper,
} from "../CommonStyle";

export const StyledButton = styled.div`
  //폰트관련
  font-size: 15px;
  font-family: "Pretendard";
  font-weight: 400;
  color: #606266;
  white-space: nowrap;

  //공간 여백 및 크기
  padding: 2px 10px;
  border-radius: 0.1875rem;
  border: 1px solid #d9d9d9;
  width: 200px;
  box-sizing: border-box;
  margin: auto;

  //텍스트얼라인, 아이콘과의 위치
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeef;

  ${hoverEffect}// Any additional specific styles here

`;

export const StyledIcon = styled(smallStyledIconWrapper)`
  margin-right: -3px;
  svg {
    stroke: #606266;
    fill: #606266;
    width: 25px;
    height: 25px;
    // stroke-width: 1;
  }
`;
