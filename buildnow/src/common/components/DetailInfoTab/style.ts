"use client";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align to the left
  justify-content: flex-start;
  background-color: #f7f7f7;
  min-height: 100vh;
  height : auto
  width: 71.6rem;
`;

export const CompanyNameContainer = styled.h1`
  font-size: 3rem;
  color: #fff;
  background-color: #2f4252;
  height: 8rem;
  width: 69.6rem;
  display: flex;
  justify-content: space-between; // 내부 요소들을 양 끝으로 정렬
  align-items: center;
  padding: 1.5rem 5rem 1.5rem 3rem; // 상단, 하단 패딩 및 좌우 패딩
  border-radius: 1rem 0 0 0;
  box-sizing: border-box;
  margin: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CompanyLabel = styled.div`
  font-size: 1.2rem; // "업체명"의 글꼴 크기
  color: #ffffff; // "업체명"의 글꼴 색상
  opacity: 0.5;
  margin-bottom: 0.2rem;
`;

export const CompanyName = styled.div`
  font-size: 3rem; // 실제 회사 이름의 글꼴 크기
  font-weight: 500; // 실제 회사 이름의 글꼴 굵기
  color: #fff; // 실제 회사 이름의 글꼴 색상
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box; // 패딩과 테두리를 너비에 포함
  width: 69.6rem; // 너비를 TabsContainer와 동일하게 설정
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
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
  height: 67rem;
  padding: 2rem 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 69.6rem; // Full width to align with the PageContainer
  box-sizing: border-box; // Include padding in width
  margin-top: -1px; // Connect with the TabsContainer
  margin-right: 1rem;
  margin-left: 1rem;
  align-items: center;
  border-radius: 0 0 0 1rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px; // Adjust the width as needed
  }
`;

export const TagAndResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 2rem;
`;

export const Score = styled.div`
  font-size: 2.3rem; // 글꼴 크기 증가
  font-weight: 550; // 글꼴 굵기 변경
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em; // 문자 사이 간격 추가
`;

export const PassStatus = styled.div<{ isPassed: boolean }>`
  font-size: 1.5rem;
  font-weight: 550; // 글꼴 굵기 변경
  color: ${(props) => (props.isPassed ? "#409EFF" : "#F56C6C")}; // 색상 변경
  letter-spacing: 0.1em; // 문자 사이 간격 추가
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
