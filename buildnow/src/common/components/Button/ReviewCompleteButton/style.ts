// ReviewCompleteButtonStyle.ts
"use client"
import styled from "styled-components";
import { baseButtonStyles, hoverEffect } from "../CommonStyle";

interface ButtonProps {
  isChecked: boolean;
}

const darkGreen = "#27632A";

export const StyledButton = styled(baseButtonStyles)<ButtonProps>`
  background-color: ${(props) => (props.isChecked ? "#4CAF50" : "#D9D9D9")};
  color: ${(props) => (props.isChecked ? "#FFFFFF" : "#606266")};
  border: 1px solid ${(props) => (props.isChecked ? "#4CAF50" : "#D9D9D9")};

  width: 100%;
  fonst-size: 22px;
  min-height: 4rem;
  height: 4rem;

  align-self: center; // 부모가 flex일 때 중앙으로 정렬
  margin: 1em; // 상하 마진을 줘서 끝에서 약간 떨어지게 함

  // position: fixed;
  bottom: 4em; // 화면의 하단에 위치

  ${hoverEffect}
  &:hover {
    background-color: ${(props) => (props.isChecked ? "#4CAF50" : "#959595")};
    border-color: ${(props) => (props.isChecked ? "#4CAF50" : "#959595")};
  }
`;

export const CheckboxIcon = styled.div<ButtonProps>`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${(props) => (props.isChecked ? darkGreen : "#606266")};
  background-color: ${(props) => (props.isChecked ? "white" : "transparent")};
  margin-right: 1rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, border-color 0.3s;
  position: relative;
  &:after {
    content: "✓";
    color: ${(props) => (props.isChecked ? darkGreen : "transparent")};
    font-size: 1.25rem;
    transform: translate(0%, 6%);
    transition: color 0.3s;
  }
`;
