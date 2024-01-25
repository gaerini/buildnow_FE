// style.ts
"use client";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  font-size: 0.75rem; // 수정됨
  width: 70%;
  font-family: Pretendard;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between; // Spread the label and the dropdown box across the full width
  align-items: center;
  width: 100%; // Ensure the wrapper takes the full width available
  max-width: 12.75rem; // 수정됨
`;

export const Label = styled.span`
  white-space: nowrap; // Prevents the text from wrapping
  font-size: 1.125rem; // 수정됨
`;

export const SelectedWorkType = styled.span`
  flex-grow: 1;
  display: flex;
  justify-content: space-between; // Keeps the apply count to the right
  position: relative; // Relative positioning for precise control of children
`;

export const ApplyCount = styled.span<{ isVisible?: boolean }>`
  background-color: #e0e0e0;
  padding: 0.15rem 0.15rem; // 수정됨
  font-size: 0.525rem; // 수정됨
  height: 0.6rem; // 수정됨
  width: 0.675rem; // 수정됨
  margin-right: 0.375rem; // 수정됨
  color: "gray";

  display: inline-flex;
  align-items: center;
  justify-content: center;

  line-height: 1;
  position: absolute; // Position the apply count absolutely relative to its parent
  right: 0; // Align to the far right of its parent container

  display: ${({ isVisible }) =>
    isVisible
      ? "inline-flex"
      : "none"}; // Conditionally display based on the isVisible prop
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.1875rem 0.375rem; // 수정됨
  max-width: 15rem; // 수정됨
  margin-left: 0.375rem; // 수정됨
  border: 1px solid #ccc;
  width: 100%;

  box-sizing: border-box;

  position: relative;
  border-radius: 0.1875rem; //수정됨
`;

export const DropdownIcon = styled.span<{ $isOpen: boolean }>`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(45deg)" : "rotate(-135deg)"};
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
  max-height: calc(1.875rem * 5); // 수정됨
  overflow-y: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Add a subtle shadow for depth
`;

export const DropdownListItem = styled.li<{ isSelected: boolean }>`
  padding: 0.375rem; // 수정됨
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
