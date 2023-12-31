"use client";

import styled from "styled-components";

export const Header = styled.div`
  padding: 0em 1em;
`;

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 자식 요소들을 중앙 정렬
  justify-content: center; // 컨테이너의 중간에 내용을 배치
  padding: 1em 2em;
`;

export const ScoreCard = styled.div`
  width: 90%;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1em 2em;
  border-radius: 10px;
  border: 1px solid #dddddd;
  background: #ffffff;
  margin: 1em;
  font-size: 15px;
  font-weight: 400;
`;

// 점수 텍스트 스타일링
export const ScoreText = styled.span`
  font-size: 1.7em;
  color: #3498db;
  font-weight: bold;
`;

// 상태 텍스트 스타일링
export const Statusdiv = styled.span`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #2ecc71;
`;
