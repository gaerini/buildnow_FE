// import styled from "styled-components";

// // The main button style
// export const StyledButton = styled.button`
//   background-color: #d9d9d9;
//   color: #606266;
//   border: #d9d9d9;
//   padding: 0.5rem 1rem;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 0.5rem;
//   cursor: pointer;
//   transition: background-color 0.3s, border-color 0.3s, color 0.3s;
//   border-radius: 1rem;
//   width: 100%;
//   max-width: 10rem;
//   max-height: 1rem;
//   height: auto;
//   white-space: nowrap; // Keep text on a single line
//   box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);

//   &:hover {
//     background-color: #959595;
//     color: white; // Text color on hover
//     border-color: #959595; // Border color on hover

//     & > div > svg {
//       stroke-width: 0.5;
//       stroke: "white";
//       fill: white; // Change to the desired hover color
//     }
//   }
// `;

// // Style for the icon container
// export const StyledIconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 0.3rem; // Space between icon and text
//   svg {
//     stroke: #8d8d8d;
//     stroke-width: 1;
//     fill: #606266;
//     width: 0.6rem; // Icon width
//     height: 0.6rem; // Icon height
//     transition: fill 0.3s; // Smooth transition for fill color change
//   }
// `;

// CorrectScoreButtonStyle.ts

import styled from "styled-components";
import {
  baseButtonStyles,
  hoverEffect,
  StyledIconWrapper,
  smallButtonStyles,
  smallStyledIconWrapper,
} from "../CommonStyle";

export const StyledButton = styled(smallButtonStyles)`
  border-radius: 1rem;
  align-self: flex-end; // 부모가 flex일 때 오른쪽 상단으로 정렬
  position: relative;
  top: -3em; // 화면의 상단에 위치
  margin: 1em; // 좌우 마진을 줘서 끝에서 약간 떨어지게 함
  ${hoverEffect}// Any additional specific styles here
`;

export const StyledIcon = styled(smallStyledIconWrapper)``;
