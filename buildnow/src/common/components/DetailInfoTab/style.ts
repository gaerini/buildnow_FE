"use client";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #f7f7f7;
  height: 60rem; // 수정됨
  width: 53.7rem; // 수정됨
  box-sizing: border-box;
`;

export const CompanyNameContainer = styled.h1`
  font-size: 2.25rem; // 수정됨
  color: #fff;
  background-color: #2f4252;
  height: 6rem; // 수정됨
  width: 53.7rem; // 수정됨
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 3.75rem 1.125rem 2.25rem; // 수정됨
  border-radius: 0.75rem 0 0 0; // 수정됨
  box-sizing: border-box;
  margin: 0 0 0.75rem 0; // 수정됨
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CompanyLabel = styled.div`
  font-size: 0.9rem; // 수정됨
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 0.15rem; // 수정됨
`;

export const CompanyName = styled.div`
  font-size: 2.25rem; // 수정됨
  font-weight: 500;
  color: #fff;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 53.7rem; // 수정됨
`;

export const Tab = styled.button<{ $isActive: boolean }>`
  font-size: 0.9rem; // 수정됨
  padding: 0.75rem 1.125rem; // 수정됨
  margin-right: 3.75px; // 수정됨
  border: none;
  background-color: ${(props) => (props.$isActive ? "#fff" : "transparent")};
  color: ${(props) => (props.$isActive ? "#2694FE" : "black")};
  cursor: pointer;
  border-radius: ${(props) =>
    props.$isActive ? "0.375rem 0.375rem 0 0" : "0"}; // 수정됨
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 1.5rem 2.25rem; // 수정됨
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 53.7rem; // 수정됨
  box-sizing: border-box;
  margin-top: -1px;
  align-items: center;
  border-radius: 0 0 0 0.75rem; // 수정됨
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3.75px; // 수정됨
  }
`;

export const TagAndResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1125rem; // 수정됨
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 1.5rem; // 수정됨
`;

export const Score = styled.div`
  font-size: 1.725rem; // 수정됨
  font-weight: 550;
  margin-bottom: 0.375rem; // 수정됨
`;

export const PassStatus = styled.div<{ $isPassed: boolean }>`
  font-size: 1.125rem; // 수정됨
  font-weight: 550;
  color: ${(props) => (props.$isPassed ? "#409EFF" : "#F56C6C")};
  letter-spacing: 0.075em; // 수정됨
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 2.25rem; // 수정됨
  }
`;
