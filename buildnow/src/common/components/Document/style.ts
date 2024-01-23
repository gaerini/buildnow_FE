import styled from "styled-components";

export const Table = styled.table`
  width: 66rem;
  border-collapse: collapse;
  /* 기타 필요한 스타일 */
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #d3d3d3;
  &:last-child {
    border-bottom: 1px solid #8d8d8d; // Add border between rows
  }
`;

interface TableHeaderProps {
  width?: string; // Make the width optional
}

export const TableHeader = styled.th<{ width: string }>`
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  font-weight: 400;
  text-align: center;
  width: ${(props) => props.width};
  border-bottom: 2px solid #000; // Add border under the header
`;

interface TableCellProps {
  width: string;
  isSubmitted?: boolean;
  align?: "left" | "center"; // Add an alignment prop
  column?: string;
}

export const TableCell = styled.td<TableCellProps>`
  font-size: 1.2rem;
  text-align: ${(props) => props.align || "left"}; // Default to left alignment
  width: ${(props) => props.width};
  color: ${(props) =>
    props.column === "서류명"
      ? "black"
      : props.isSubmitted
      ? "green"
      : "red"}; // Conditional color for 서류명
  padding: 0.8rem 0; // Increased vertical padding for row spacing
`;

export const ViewButton = styled.a`
  /* 버튼 스타일 */
  padding: 0.5rem 1rem;
  background-color: #ddd;
  border-radius: 0.3rem;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #ccc;
  }
`;
