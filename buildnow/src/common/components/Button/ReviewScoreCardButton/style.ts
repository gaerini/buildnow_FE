"use client";
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
  border-radius: 0.1875rem;
  ${hoverEffect}
`;

export const StyledIcon = styled(smallStyledIconWrapper)``;
