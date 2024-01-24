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
//   border-radius: 0.25rem;
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

// ReviewScoreCardButtonStyle.ts
import styled from "styled-components";
import {
  hoverEffect,
  smallButtonStyles,
  smallStyledIconWrapper,
} from "../CommonStyle";

export const StyledButton = styled.div`
  //폰트관련
  font-size: 0.8rem;
  font-family: "Pretendard";
  font-weight: 400;
  color: #606266;
  white-space: nowrap;

  //공간 여백 및 크기
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #d9d9d9;
  max-width: 10rem;
  max-height: 1.5rem;
  box-sizing: border-box;
  margin: auto;

  //텍스트얼라인, 아이콘과의 위치
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeef;

  ${hoverEffect}// Any additional specific styles here
`;

export const StyledIcon = styled(smallStyledIconWrapper)`
  margin-right: -3px;
  svg {
    stroke: #606266;
    fill: #606266;
    width: 20px;
    height: 20px;
    // stroke-width: 1;
  }
`;
