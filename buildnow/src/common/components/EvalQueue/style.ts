// style.ts
"use client";
import styled from "styled-components";

export const QueueContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 17.34375rem); // 수정됨
  grid-template-rows: repeat(auto-fill, 7.5rem); // 수정됨
  grid-gap: 1.5rem 1.125rem; // 수정됨
  align-content: start;
  width: 72.75rem; // 수정됨
  height: 20.25rem; // 수정됨
  padding: 2.25rem; // 수정됨
  box-sizing: border-box;
`;
