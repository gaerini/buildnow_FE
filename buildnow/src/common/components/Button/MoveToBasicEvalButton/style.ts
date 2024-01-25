"use client";
// MoveToBasicEvalButtonStyle.ts
import styled from "styled-components";
import {
  baseButtonStyles,
  hoverEffect,
  StyledIconWrapper,
} from "../CommonStyle";

interface ButtonProps {
  isActive: boolean;
}

export const StyledButton = styled(baseButtonStyles)<ButtonProps>`
  background-color: ${(props) => (props.isActive ? "#2F4252" : "#D9D9D9")};
  color: ${(props) => (props.isActive ? "#DADADA" : "#606266")};
  border: 1px solid ${(props) => (props.isActive ? "#2F4252" : "#D9D9D9")};
  border-radius: 0.9375rem;
  ${hoverEffect}
`;

export const StyledIcon = styled(StyledIconWrapper)<ButtonProps>`
  margin-left: 0.375rem;
  svg {
    stroke: ${(props) => (props.isActive ? "#DADADA" : "#8D8D8D")};
    fill: ${(props) => (props.isActive ? "#DADADA" : "#606266")};
  }
`;
