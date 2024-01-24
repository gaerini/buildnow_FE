import styled from "styled-components";

// Styled components
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  background-color: #fff;
  border-radius: 5px; // Update based on your design
  border: 3px solid #d9ecff;
  box-sizing: border-box;
  width: 300px;
  height: 30px;
  .button-icon {
    fill: #93b4cb; // Update the icon color according to your design
    width: 20px; // Adjust the icon size based on your design
    height: 20px; // Adjust the icon size based on your design
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  color: #597ea6; // The color of the text
  &::placeholder {
    color: #93b4cb; // The color of the placeholder text
  }
  &:focus {
    outline: none;
  }
`;
