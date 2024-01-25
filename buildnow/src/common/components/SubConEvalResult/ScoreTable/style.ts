"use client";
import styled from "styled-components";

export const EvalItemScoreContainer = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향 정렬
  align-items: stretch; // 자식 요소들이 컨테이너 너비에 맞게 늘어남
  width: 100%; // 필요한 경우 너비 조정
`;

export const ScoreTable = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: stretch;
  border-top: 0.01rem dashed #8d8d8d;
  border-bottom: 0.01rem dashed #8d8d8d;
`;

export const EvalItemBox = styled.div`
  width: 20%;
  height: auto;
  background-color: #ecf5ff;
  display: flex;
  flex-direction: column;
  justify-content: center; // 세로 중앙 정렬
  align-items: center; // 가로 중앙 정렬 추가
  padding-top: 0.75rem; // 수정됨
  padding-bottom: 0.75rem; // 수정됨
  font-size: 0.9375rem; // 수정됨
  font-weight: 450;
  color: black;
`;

export const TotalScoreBox = styled.div`
  width: 4.35rem; // 수정됨
  height: 1.35rem; // 수정됨
  background-color: white;
  border: solid 1px #d9ecff;
  border-radius: 0.375rem; // 수정됨
  margin-top: 0.75rem; // 수정됨
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem; // 수정됨
  color: #409eff;
`;

export const SumScore = styled.div`
  width: 100%;
  height: 1.5rem; // 수정됨
  padding-top: 0.225rem; // 수정됨
  margin-bottom: 1.5rem; // 수정됨
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.9rem; // 수정됨
  font-weight: 300;
  padding-right: 4rem;
  box-sizing: border-box;
`;

export const ScoreDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.9rem; // 수정됨
  margin-bottom: 0.9rem; // 수정됨
`;

export const ScoreDetail = styled.div`
  display: flex;
  height: 1.5rem; // 수정됨
  margin-top: 0.9rem; // 수정됨
  margin-bottom: 0.9rem; // 수정됨

  > div:first-child {
    width: calc(50% - 9.225rem); // 수정됨
  }

  > div:nth-child(2) {
    width: 25%; // 항목에 대한 값
  }

  > div:last-child {
    width: 25%; // 평가 점수
  }
`;

export const ScoreDetailBoxWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 0.6rem; // 수정됨
  padding-bottom: 0.6rem; // 수정됨
`;
