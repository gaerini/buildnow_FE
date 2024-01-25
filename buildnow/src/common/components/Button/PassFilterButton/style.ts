// DownloadButton.tsx
import styled from "styled-components";

// Styled components
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaf3fd;
  border-color: 1px #93b4cb;
  border-radius: 5px; // Update based on your design
  padding: 4px 10px;
  height: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: none;
  border: 1px solid #93b4cb;

  &:hover {
    background-color: #597ea6; // Update the hover color according to your design
    .button-text {
      color: #fff;
    }
    path {
      fill: #fff;
    }
  }

  // Styling for the text inside the button
  .button-text {
    color: #93b4cb; // Update the text color according to your design
  }

  // Styling for the icon inside the button
  .button-icon {
    fill: #93b4cb; // Update the icon color according to your design
    width: 20px; // Adjust the icon size based on your design
    height: 20px; // Adjust the icon size based on your design
  }
`;
