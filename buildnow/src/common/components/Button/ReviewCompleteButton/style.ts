// import styled from "styled-components";

// interface ButtonProps {
//   isChecked: boolean;
// }

// // Define a dark green color
// const darkGreen = "#27632A";

// export const StyledButton = styled.button<ButtonProps>`
//   background-color: ${(props) =>
//     props.isChecked
//       ? "#4CAF50"
//       : "#D9D9D9"}; // Green if checked, light grey if not
//   color: ${(props) => (props.isChecked ? "#FFFFFF" : "#606266")};
//   border: 1px solid ${(props) => (props.isChecked ? "#4CAF50" : "#D9D9D9")}; // Dark green border if checked, grey if not
//   padding: 8px 12px;
//   text-align: center;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 15px;
//   cursor: pointer;
//   transition: background-color 0.3s, border-color 0.3s, color 0.3s;
//   border-radius: 3px;
//   width: 100%;
//   max-width: 280px;
//   max-height: 50px;
//   height: auto;
//   white-space: nowrap;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   &:hover {
//     background-color: ${(props) =>
//       props.isChecked
//         ? "#4CAF50"
//         : "#959595"}; // Dark grey on hover if not checked, remain green if checked
//     color: white; // White text on hover
//     border-color: ${(props) =>
//       props.isChecked
//         ? "#4CAF50"
//         : "#959595"}; // White border on hover if not checked, remain dark green if checked

//     // Change Checkbox border color on hover
//     & > div {
//       border-color: white; // White border on hover
//     }
//   }
// `;

// export const CheckboxIcon = styled.div<ButtonProps>`
//   width: 17px;
//   height: 17px;
//   border: 1px solid ${(props) => (props.isChecked ? darkGreen : "#606266")}; // Dark green border if checked, grey if not
//   background-color: ${(props) =>
//     props.isChecked
//       ? "white"
//       : "transparent"}; // White background if checked, transparent if not
//   margin-right: 16px; // Increased space between checkbox and text
//   border-radius: 3px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.3s, border-color 0.3s;
//   position: relative; // Positioning context for the checkmark

//   &:after {
//     content: "✓";
//     color: ${(props) =>
//       props.isChecked
//         ? darkGreen
//         : "transparent"}; // Dark green checkmark if checked, transparent if not
//     font-size: 20px; // Make the checkmark larger
//     transform: translate(0%, 6%); // Fine-tune the centering of the checkmark
//     transition: color 0.3s;
//   }
// `;

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
  fonst-size: 22px;
  min-height: 4rem;
  height: 4rem;

  align-self: center; // 부모가 flex일 때 중앙으로 정렬
  margin: 1em; // 상하 마진을 줘서 끝에서 약간 떨어지게 함

  // position: fixed;
  bottom: 4em; // 화면의 하단에 위치

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
