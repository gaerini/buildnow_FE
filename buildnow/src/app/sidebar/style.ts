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
  alignitems: stretch;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between; // 버튼들 사이에 공간을 균등하게 배분
  padding: 20px 0; // 적당한 패딩을 추가하여 여백을 조정
  align-items: center; // 버튼들을 수직 중앙으로 정렬
  border-bottom: 1px solid #ddd; // 하단에 경계선 추가
  height: 30px;
  width: 90%;
  margin: 10px auto;

  > * {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // 테이블이 전체 너비를 차지하도록 설정
  box-sizing: border-box;
`;
