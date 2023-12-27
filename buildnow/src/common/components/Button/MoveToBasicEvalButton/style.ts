// import styled from "styled-components";

// interface ButtonProps {
//   isActive: boolean;
// }

// // The main button style
// export const StyledButton = styled.button<ButtonProps>`
//   background-color: ${(props) => (props.isActive ? "#2F4252" : "#D9D9D9")};
//   color: ${(props) =>
//     props.isActive
//       ? "#DADADA"
//       : "#606266"}; // White if checked, dark grey if not
//   border: 1px solid ${(props) => (props.isActive ? "#2F4252" : "#D9D9D9")}; // Border color changes with state
//   padding: 0.5rem 1rem;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 0.75rem;
//   cursor: pointer;
//   transition: background-color 0.3s, border-color 0.3s, color 0.3s;
//   border-radius: 1.25rem;
//   width: 100%;
//   max-width: 10rem;
//   max-height: 2rem;
//   height: auto;
//   white-space: nowrap; // Keep text on a single line
//   box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);

//   &:hover {
//     background-color: ${(props) =>
//       props.isActive
//         ? "#2F4252"
//         : "#959595"}; // Dark grey on hover if not checked, remain dark green if checked
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
//   margin-left: 0.5rem; // Space between icon and text

//   // Style adjustments for the SVG icon
//   svg {
//     stroke: ${(props) =>
//       props.isActive ? "#DADADA" : "#8D8D8D"}; // Set the stroke color
//     stroke-width: 0.5; // Set the stroke width to make it look bolder
//     fill: ${(props) =>
//       props.isActive
//         ? "#DADADA"
//         : "#606266"}; // Change fill color based on isActive state
//     width: 1rem; // Icon width
//     height: 1rem; // Icon height
//     transform: translate(0%, 0%); // Fine-tune the centering of the checkmark
//     overflow: visible; // Ensure SVG isn't clipped
//     transition: fill 0.3s; // Smooth transition for fill color change
//   }
// `;

// MoveToBasicEvalButtonStyle.ts
import styled from "styled-components";
import {
  baseButtonStyles,
  hoverEffect,
  StyledIconWrapper,
} from "../CommonStyle";

interface ButtonProps {
  isActive: boolean;
}

export const StyledButton = styled(baseButtonStyles)`
  background-color: ${(props) => (props.isActive ? "#2F4252" : "#D9D9D9")};
  color: ${(props) => (props.isActive ? "#DADADA" : "#606266")};
  border: 1px solid ${(props) => (props.isActive ? "#2F4252" : "#D9D9D9")};
  border-radius: 1.25rem;
  ${hoverEffect}// Additional specific styles here
`;

export const StyledIcon = styled(StyledIconWrapper)<ButtonProps>`
  margin-left: 0.5rem;
  svg {
    stroke: ${(props) => (props.isActive ? "#DADADA" : "#8D8D8D")};
    fill: ${(props) => (props.isActive ? "#DADADA" : "#606266")};
  }
`;
