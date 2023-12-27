// import styled from "styled-components";

// interface ButtonProps {
//   isActive: boolean;
// }

// // The main button style
// export const StyledButton = styled.button<ButtonProps>`
//   background-color: ${(props) =>
//     props.isActive
//       ? "#2F4252"
//       : "#D9D9D9"}; // Green if checked, light grey if not
//   color: ${(props) =>
//     props.isActive
//       ? "#DADADA"
//       : "#606266"}; // White if checked, dark grey if not
//   border: 1px solid ${(props) => (props.isActive ? "#2F4252" : "#D9D9D9")}; // Border color changes with state
//   padding: 8px 16px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 12px;
//   cursor: pointer;
//   transition: background-color 0.3s, border-color 0.3s, color 0.3s;
//   border-radius: 4px;
//   width: 100%;
//   max-width: 150px;
//   max-height: 30px;
//   height: auto;
//   white-space: nowrap; // Keep text on a single line
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   &:hover {
//     background-color: ${(props) => (props.isActive ? "#2F4252" : "#959595")};
//     color: white; // Text color on hover
//     border-color: ${(props) =>
//       props.isActive ? "#2F4252" : "#959595"}; // Border color on hover

//     & > div > svg {
//       stroke-width: 0.5;
//       stroke: ${(props) => "white"};
//       fill: white; // Change to the desired hover color
//     }
//   }
// `;

// // Style for the icon container
// export const StyledIconWrapper = styled.div<ButtonProps>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 8px; // Space between icon and text

//   // Style adjustments for the SVG icon
//   svg {
//     stroke: ${(props) =>
//       props.isActive ? "#DADADA" : "#8D8D8D"}; // Set the stroke color
//     stroke-width: 0.3; // Set the stroke width to make it look bolder
//     fill: ${(props) =>
//       props.isActive
//         ? "#DADADA"
//         : "#606266"}; // Change fill color based on isActive state
//     width: 15px; // Icon width
//     height: 15px; // Icon height
//     transition: fill 0.3s; // Smooth transition for fill color change
//   }
// `;

// AutoEvalButtonStyle.ts
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
