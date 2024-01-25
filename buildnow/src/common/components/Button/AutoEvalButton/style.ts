"use client"
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
  ${hoverEffect}
  &:hover {
    background-color: ${(props) => (props.isActive ? "#2F4252" : "#959595")};
    border-color: ${(props) => (props.isActive ? "#2F4252" : "#959595")};
  }
`;
// Reuse StyledIconWrapper from CommonStyles.ts with specific color adjustments
export const StyledIcon = styled(StyledIconWrapper)<ButtonProps>`
  svg {
    stroke: ${(props) => (props.isActive ? "#DADADA" : "#8D8D8D")};
    fill: ${(props) => (props.isActive ? "#DADADA" : "#606266")};
  }
`;
