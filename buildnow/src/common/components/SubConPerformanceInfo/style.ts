// style.ts
"use client";
import styled from "styled-components";

export const TableComponent = styled.div`
  width: 49.5rem; // 수정됨
  margin-right: 3.75rem; // 수정됨
  margin-left: 3.75rem; // 수정됨
  margin-bottom: 2.25rem; // 수정됨
  display: flex;
  flex-direction: column;
  text-align: center; // Align the text to the left
  &:first-child {
    margin-top: 1.125rem; //수정됨
  }
`;

export const LargeContainer = styled.div`
  display: flex; // Use flex to align items
  align-items: center; // This will vertically center the text
  justify-content: center; // This will horizontally center the text
  width: 49.5rem; // 수정됨
  padding: 0.75rem 0rem; // 수정됨
  border-radius: 0.1875rem; //수정됨
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1); //수정됨
`;

export const TableHeader = styled.div`
  font-size: 0.75rem; // 수정됨
  text-align: left; // Align the text to the left
  color: black; // Set the text color
  display: flex; // Use flexbox for alignment
  align-items: center; // Center items vertically
  gap: 0.375rem; //수정됨
  margin-bottom: 0.375rem; //수정됨
`;

export const TableTitle = styled.div`
  font-size: 0.9rem; // 수정됨
  margin-bottom: 0.9rem; // 수정됨
  font-weight: bold;
  text-align: left; // Align the text to the left
  color: #333; // Set the text color
`;
