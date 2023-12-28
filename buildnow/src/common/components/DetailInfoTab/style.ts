import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align to the left
  justify-content: flex-start;
  background-color: #f7f7f7;
  min-height: 100vh;
  max-width: 74rem;
  width: 100%;
  padding: 1rem 1rem;
`;

export const CompanyNameContainer = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  margin-left: 2rem;
  width: 70rem;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.7rem;
  padding-right: 1.25rem; // Padding to ensure it doesn't stretch too far
  margin-bottom: 0; // No space between tabs and content, they are connected
  width: 97%;
  margin-left: calc(2rem + 10px);
  margin-right: 2rem;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  padding: 0.625rem 1rem;
  margin-right: 5px; // Margin between tabs
  border: none; // No borders
  background-color: ${(props) => (props.isActive ? "#fff" : "transparent")};
  color: ${(props) =>
    props.isActive ? "#2694FE" : "black"}; // Blue text for active tab
  cursor: pointer;
  border-radius: ${(props) =>
    props.isActive
      ? "0.5rem 0.5rem 0 0"
      : "0"}; // Rounded corners for active tab on top
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex; // Use flexbox layout
  flex-direction: column; // Stack children vertically
  align-items: center; // Center children horizontally
  padding: 1rem 0rem;
  border-radius: 0.75rem; // Rounded corners
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 70rem; // Full width to align with the PageContainer
  margin-left: 2rem;
  margin-right: 2rem;
  box-sizing: border-box; // Include padding in width
  margin-top: -1px; // Connect with the TabsContainer
  align-items: center;
`;
