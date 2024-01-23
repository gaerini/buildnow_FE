"use client";
import styled from "styled-components";

export const CompanyInfoWindowWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MainContent = styled.div`
  flex-grow: 1; // 나머지 공간을 모두 차지하도록 설정
  display: flex; // 이것도 Flexbox 컨테이너로 만듭니다.
  flex-direction: column; // 자식 요소들을 수직으로 정렬
`;
