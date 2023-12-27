"use client";

import styled from "styled-components";
import * as D from "../ScoringTable/style";

export const Body = styled.div`
  display: flex; // 좌에서 우로 정렬
  justify-content: space-between; // 아이템을 좌측 정렬
  align-items: center; // 아이템을 세로 중앙에 위치
  padding: 10px;
  border-bottom: 1px dotted #ccc;

  // 첫 번째와 마지막 요소에 대한 스타일을 추가로 조정할 수 있습니다.
  & > div:first-child {
    margin-left: 1em; // 첫 번째 요소의 왼쪽 마진을 제거
  }

  //평가점수 오른쪽 마진
  & > div:nth-child(2) {
    margin-right: 5.2em;
  }

  //자세히보기 토글 오른쪽 마진
  & > svg {
    margin-right: 2.5em;
  }

  font-size: 0.9em;
`;

export const Group = styled.div`
  display: flex;
  align-items: center; // SVG와 텍스트를 세로로 중앙 정렬
  width: 10em; //ScoreBox와의 여백을 유지하기 위해 너비 고정 (주어진 너비보다 텍스트 길이가 길었을 때 대처해야함)
  // SVG와 텍스트 사이의 간격이 없도록 설정
  svg {
    margin-right: 0.5em; // SVG 이미지와 텍스트 사이의 마진 제거
  }
  font-color: #606266;
`;

export const DetailsArea = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;

  & > div {
    margin: 0.3em 3em;
  }

  background: #ffffff;
  font-color: #606266;
  font-weight: 100;
`;

export const Detailcomp = styled.div`
  display: flex; // 좌에서 우로 정렬
  justify-content: space-between; // 아이템을 좌측 정렬
  align-items: center; // 아이템을 세로 중앙에 위치

  > div:first-child {
    margin-right: 6.5em; // 첫 번째 자식 요소 (텍스트)의 오른쪽 마진 설정
  }

  // // ScoreBox 스타일 컴포넌트에 스타일을 추가하고 싶다면 해당 컴포넌트를 대상으로 지정
  // ${D.ScoreBox} {
  //   margin-left: 1em; // 첫 번째 자식 요소 (텍스트)의 오른쪽 마진 설정
  // }
`;
