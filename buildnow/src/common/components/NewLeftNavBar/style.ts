"use client";

import styled from "styled-components";

interface StyledIconContainerProps {
  $isactive: boolean;
}

export const Divider = styled.div`
  height: 2px;
  width: 80%; // 사이드바 너비에 맞게 조정
  background-color: #aaaaaa; // 선의 색상
  margin: -2px 0; // 선 위아래의 여백 조정
`;

// Inner container for the hover background
export const StyledIconContainer = styled.div<StyledIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 40%; // Makes the hover background rounded

  width: 40px; // Adjust this to control the size
  height: 40px; // Adjust this to control the size
  transition: background-color 0.3s;
  &:hover {
    background-color: #e6f1fc; // or any other color you want on hover
  }
  path {
    transition: fill 0.3s;
    fill: ${({ $isactive }) => ($isactive ? "#48659F" : "#C0C4CC")};
  }
  background-color: ${({ $isactive }) => ($isactive ? "#e6f1fc" : "none")};
`;

// 전체 사이드바를 스타일링합니다.
export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 80px;
  background-color: #1e3156;
  height: 130vh; // 전체 뷰포트 높이
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  //margin: 0px;
  //padding: 10px;
`;
