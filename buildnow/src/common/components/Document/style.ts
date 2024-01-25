"use client";
import styled from "styled-components";

export const Table = styled.table`
  width: 49.5rem;
  border-collapse: collapse;
  /* 기타 필요한 스타일 */
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #d3d3d3;
  &:last-child {
    border-bottom: 1px solid #8d8d8d; // 수정됨
  }
`;

interface TableHeaderProps {
  width?: string; // Make the width optional
}

export const TableHeader = styled.th<TableHeaderProps>`
  font-size: 0.975rem; // 수정됨
  padding-bottom: 0.375rem; // 수정됨
  font-weight: 400;
  text-align: center;
  width: ${(props) => props.width};
  border-bottom: 2px solid #000; // 수정됨
`;

interface TableCellProps {
  width: string;
  isSubmitted?: boolean;
  align?: "left" | "center"; // Add an alignment prop
  column?: string;
}

export const TableCell = styled.td<TableCellProps>`
  font-size: 0.9rem; // 수정됨
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width};
  color: ${(props) =>
    props.column === "서류명" ? "black" : props.isSubmitted ? "green" : "red"};
  padding: 0.6rem 0; // 수정됨
`;

export const ViewButton = styled.a`
  padding: 0.375rem 0.75rem; // 수정됨
  background-color: #ddd;
  border-radius: 0.225rem; // 수정됨
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #ccc;
  }
`;
