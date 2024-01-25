"use client";
import styled from "styled-components";
import {
  baseButtonStyles,
  hoverEffect,
  StyledIconWrapper,
  smallButtonStyles,
  smallStyledIconWrapper,
} from "../CommonStyle";

export const StyledButton = styled(smallButtonStyles)`
  border-radius: 0.75rem;
  align-self: flex-end;
  position: relative;
  top: -2.25em;
  margin: 0.75em;
  ${hoverEffect}
`;

export const StyledIcon = styled(smallStyledIconWrapper)``;
