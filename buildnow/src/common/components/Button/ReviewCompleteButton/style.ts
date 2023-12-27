// ReviewCompleteButtonStyle.ts
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
  height: 1rem;
  fonst-size: 22px;
  aspect-ratio: 6 / 1;
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
