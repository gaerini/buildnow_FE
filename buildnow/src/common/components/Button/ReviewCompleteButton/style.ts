// ReviewCompleteButtonStyle.ts
"use client";
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
  font-size: 16.5px; // 기존 값 유지
  min-height: 3rem;
  height: 3rem;

  align-self: center;
  margin: 0.75em;

  bottom: 3em;

  ${hoverEffect}
  &:hover {
    background-color: ${(props) => (props.isChecked ? "#4CAF50" : "#959595")};
    border-color: ${(props) => (props.isChecked ? "#4CAF50" : "#959595")};
  }
`;

export const CheckboxIcon = styled.div<ButtonProps>`
  width: 0.75rem;
  height: 0.75rem;
  border: 1px solid ${(props) => (props.isChecked ? darkGreen : "#606266")};
  background-color: ${(props) => (props.isChecked ? "white" : "transparent")};
  margin-right: 0.75rem;
  border-radius: 0.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, border-color 0.3s;
  position: relative;
  &:after {
    content: "✓";
    color: ${(props) => (props.isChecked ? darkGreen : "transparent")};
    font-size: 0.9375rem;
    transform: translate(0%, 6%);
    transition: color 0.3s;
  }
`;
