"use client";
import styled from "styled-components";

export const EvalBar = styled.div`
  position: fixed; // 위치를 고정시킵니다
  top: 0; // 상단과의 거리
  right: 0; // 우측과의 거리
  bottom: 0; // 하단과의 거리
  width: 30%; // 너비는 전체 화면의 30%
  padding: 4em 15px;
  background: #f9fafa;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  color: black;
  overflow-y: auto; // 내용이 많을 경우 스크롤 허용
`;
