// CommonStyles.ts
"use client"
import styled, { css } from "styled-components";

interface CommonButtonProps {
  isActive?: boolean;
  isChecked?: boolean;
}

const baseButtonStyles = styled.button<CommonButtonProps>`
  padding: 0.5rem 1rem;
  font-size : 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  border-radius: 0.25rem;
  width : 100%
  max-width: 10rem;
  max-height: 2rem;
  height: auto;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const smallButtonStyles = styled(baseButtonStyles)`
  background-color: #d9d9d9;
  color: #606266;
  border: 1px solid #d9d9d9;
  font-size: 0.75rem;
  max-width: 10rem;
  max-height: 1rem;
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
  margin-left: 0.5rem;
  svg {
    transition: fill 0.3s;
    stroke-width: 0.3;
    width: 1rem;
    height: 1rem;
  }
`;

export const smallStyledIconWrapper = styled(StyledIconWrapper)`
  margin-left: 0.3rem;
  svg {
    stroke: #8d8d8d;
    fill: #606266;
    width: 0.6rem;
    height: 0.6rem;
    stroke-width: 1;
  }
`;

export { baseButtonStyles, hoverEffect, smallButtonStyles };
