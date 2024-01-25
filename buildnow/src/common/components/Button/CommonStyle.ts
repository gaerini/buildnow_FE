// CommonStyles.ts
"use client";
import styled, { css } from "styled-components";

interface CommonButtonProps {
  isActive?: boolean;
  isChecked?: boolean;
}

const baseButtonStyles = styled.button<CommonButtonProps>`
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  border-radius: 0.1875rem;
  width: 100%;
  max-width: 7.5rem;
  max-height: 1.5rem;
  height: auto;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const smallButtonStyles = styled(baseButtonStyles)`
  background-color: #d9d9d9;
  color: #606266;
  border: 1px solid #d9d9d9;
  font-size: 0.5625rem;
  max-width: 7.5rem;
  max-height: 0.75rem;
`;

const hoverEffect = css`
  &:hover {
    background-color: #959595;
    color: white;
    border-color: #959595;

    & > div > svg {
      stroke-width: 0.5;
      stroke: white;
      fill: white;
    }
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.375rem;
  svg {
    transition: fill 0.3s;
    stroke-width: 0.3;
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const smallStyledIconWrapper = styled(StyledIconWrapper)`
  margin-left: 0.225rem;
  svg {
    stroke: #8d8d8d;
    fill: #606266;
    width: 0.45rem;
    height: 0.45rem;
    stroke-width: 1;
  }
`;

export { baseButtonStyles, hoverEffect, smallButtonStyles };
