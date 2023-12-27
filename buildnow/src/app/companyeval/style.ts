"use client";
import styled from "styled-components";

export const EvalBar = styled.div`
  position: fixed; // 위치를 고정시킵니다
  top: 0; // 상단과의 거리
  right: 0; // 우측과의 거리
  bottom: 0; // 하단과의 거리
  width: 30%; // 너비는 전체 화면의 30%
  padding: 4em 0em;
  background: #f9fafa;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  color: black;
  overflow-y: auto; // 내용이 많을 경우 스크롤 허용
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-color: #606266;
`;

export const Header = styled.div`
  display: flex; // flexbox 레이아웃 사용
  justify-content: space-between; // 요소들 사이에 동일한 간격을 둠
  align-items: center; // 세로 중앙 정렬
  width: 100%;
  margin: 0;
  padding: 10px 0; // 패딩을 조정하여 디자인에 맞게 스타일을 조정
  background-color: #efefef;

  // 가장자리와 요소 사이의 간격을 조정하고 싶다면 margin을 사용
  & > div {
    margin: 0 2em;
  }

  // 첫 번째와 마지막 요소에 대한 스타일을 추가로 조정할 수 있습니다.
  & > div:first-child {
    margin-left: 2em; // 첫 번째 요소의 왼쪽 마진을 제거
  }

  & > div:nth-child(2) {
    margin-right: -1em; // 마지막 요소의 오른쪽 마진을 제거
  }

  & > div:last-child {
    margin-right: 2em; // 마지막 요소의 오른쪽 마진을 제거
  }

  //폰트
  font-size: 15px;
  font-weight: 400;
`;
