"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px dotted #ccc;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const ScoreArea = styled.div`
  background-color: #e8f4fc;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsArea = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;
