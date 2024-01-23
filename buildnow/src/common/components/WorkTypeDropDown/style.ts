// style.ts
"use client";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  font-size: 0.8rem;
  width: 70%;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between; // Spread the label and the dropdown box across the full width
  align-items: center;
  width: 100%; // Ensure the wrapper takes the full width available
  max-width: 17rem;
`;

export const Label = styled.span`
  white-space: nowrap; // Prevents the text from wrapping
  fons-size: 1rem;
`;

export const SelectedWorkType = styled.span`
  flex-grow: 1;
  display: flex;
  justify-content: space-between; // Keeps the apply count to the right
  position: relative; // Relative positioning for precise control of children
`;

export const ApplyCount = styled.span<{ isVisible?: boolean }>`
  background-color: #e0e0e0;
  padding: 0.2rem 0.2rem;
  color: "gray";
  border-radius: 0.25rem;
  font-size: 0.7rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 0.8rem; // Reduced height to match the new header size
  width: 0.9rem;
  line-height: 1;
  position: absolute; // Position the apply count absolutely relative to its parent
  right: 0; // Align to the far right of its parent container
  margin-right: 0.5rem; // Add 0.5rem space between the text and the apply count box
  display: ${({ isVisible }) =>
    isVisible
      ? "inline-flex"
      : "none"}; // Conditionally display based on the isVisible prop
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.25rem 0.5rem; // Reduced vertical padding to decrease height
  border: 1px solid #ccc;
  width: 100%;
  max-width: 20rem;
  box-sizing: border-box;
  margin-left: 0.5rem;
  position: relative;
  border-radius: 0.25rem;
`;

export const DropdownIcon = styled.span<{ isOpen: boolean }>`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(-135deg)")};
  transition: transform 0.3s;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
  z-index: 1; // Ensure the list is below the header
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 0.125rem solid #ccc; // Subtle border for the list
  border-radius: 0.25rem;
  border-top: none; // Remove top border to seamlessly connect with the header
  box-sizing: border-box; // Include padding and borders in the width
  max-height: calc(2.5rem * 5);
  overflow-y: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Add a subtle shadow for depth
`;

export const DropdownListItem = styled.li<{ isSelected: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ isSelected }) =>
    isSelected
      ? "#2F4252"
      : "gray"}; // Blue for the selected item, gray for others

  &:hover {
    background-color: #f2f2f2;
    color: ${({ isSelected }) =>
      isSelected
        ? "#2F4252"
        : "black"}; // Keep blue when hovered if selected, otherwise black
  }
`;

// You can reuse ApplyCount for the list items for consistency
export const ListItemApplyCount = styled(ApplyCount)`
  color: inherit; // Ensure the apply count inherits the color from DropdownListItem
`;
