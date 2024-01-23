"use client"
// ReviewScoreCardButtonStyle.ts
import styled from "styled-components";
import {
  baseButtonStyles,
  hoverEffect,
  StyledIconWrapper,
  smallButtonStyles,
  smallStyledIconWrapper,
} from "../CommonStyle";

export const StyledButton = styled(smallButtonStyles)`
  border-radius: 0.25rem;
  ${hoverEffect}// Any additional specific styles here
`;

export const StyledIcon = styled(smallStyledIconWrapper)``;
