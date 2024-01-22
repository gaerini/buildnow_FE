import styled from "styled-components";

export const StageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69rem;
  height: 3.5rem;
  border-radius: 1rem;
  background-color: #ffffff; // 배경색을 흰색으로 설정
  border: 2px solid #d9d9d9; // 테두리 색상 설정
  position: relative;
`;

export const Stage = styled.div<{ isActive: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${(props) => (props.isActive ? "#409EFF" : "#777777")};
  position: relative;

  // 구분 기호 '>'
  &::after {
    content: ">";
    color: #777777;
    font-size: 1.5rem;
    position: absolute;
    right: 0; // 각 스테이지의 오른쪽 끝에 배치
    transform: translateX(50%); // 중앙으로 이동
  }

  &:last-child::after {
    content: "";
  }

  // 활성화된 텍스트 아래의 파란색 선
  &::before {
    content: "";
    display: ${(props) => (props.isActive ? "block" : "none")};
    width: 16.5rem;
    height: 0.2rem;
    background-color: #409eff;
    position: absolute;
    bottom: -1rem; // 컴포넌트 아래에 위치
    left: 50%; // 스테이지의 가운데에 위치
    transform: translateX(-50%); // 정확한 중앙 정렬
  }
`;
