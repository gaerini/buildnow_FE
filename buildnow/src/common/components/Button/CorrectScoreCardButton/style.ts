"use client"
import styled from "styled-components";
import {
  baseButtonStyles,
  hoverEffect,
  StyledIconWrapper,
  smallButtonStyles,
  smallStyledIconWrapper,
} from "../CommonStyle";

export const StyledButton = styled(smallButtonStyles)`
  border-radius: 1rem;
  align-self: flex-end; // 부모가 flex일 때 오른쪽 상단으로 정렬
  position: relative;
  top: -3em; // 화면의 상단에 위치
  margin: 1em; // 좌우 마진을 줘서 끝에서 약간 떨어지게 함
  ${hoverEffect}// Any additional specific styles here
`;

export const StyledIcon = styled(smallStyledIconWrapper)``;
