import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const Item = styled.div`
  width: 37.5%;
  color: black;
  font-size: 0.9375rem; // 수정됨
  padding-left: 2.625rem; // 수정됨
  padding-top: 0.675rem; // 수정됨
  padding-bottom: 0.675rem; // 수정됨
  box-sizing: border-box;
`;

export const Value = styled.div`
  display: flex;
  justify-content: center; // 가로축에서 중앙 정렬
  align-items: center; // 세로축에서 중앙 정렬
  width: 31.25%; // Value 컴포넌트의 너비 설정
`;

export const ValueBox = styled.div`
  width: 4.35rem; // 수정됨
  height: 1.5rem; // 수정됨
  font-size: 0.9375rem; // 수정됨
  padding-left: 0.5rem; // 수정됨
  padding-right: 0.5rem; // 수정됨
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem; // 수정됨
  box-sizing: border-box;
`;

export const Score = styled.div`
  display: flex;
  justify-content: center; // 가로축에서 중앙 정렬
  align-items: center; // 세로축에서 중앙 정렬
  width: 31.25%;
  /* 추가적인 스타일링 */
`;

interface ScoreBoxProps {
  isBelowThreshold: boolean;
}

export const ScoreBox = styled.div<ScoreBoxProps>`
  width: 4.35rem;
  height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: ${(props) =>
    props.isBelowThreshold ? "#F8E3E3" : "#e3f8e4"};
  color: ${(props) => (props.isBelowThreshold ? "#A77070" : "#71a770")};
  font-size: 0.9375rem;
  border-radius: 0.375rem;
  border: 1px solid
    ${(props) => (props.isBelowThreshold ? "#A77070" : "#71a770")};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
