import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align to the left
  justify-content: flex-start;
  background-color: #f7f7f7;
  height: 60rem; // 수정됨
  width: 53.7rem; // 수정됨
  border-radius: 0 0.75rem 0.75rem 0; // 수정됨
  border-top: 0.375rem solid #bcbcbc; // 수정됨
  border-bottom: 0.15rem solid #bcbcbc; // 수정됨
  box-sizing: border-box;
`;

export const CompanyNameContainer = styled.div`
  width: 100%;
  height: 8.7rem; // 수정됨
  padding: 1.875rem; // 수정됨
  background-color: white;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box; // box-sizing 추가
`;

export const CompanyNameText = styled.span`
  font-size: 1.5rem; // 수정됨
  font-weight: 550;
  color: black; // companyName 부분 색상

  &::after {
    content: " 의 배점 결과";
    color: #335c64; // '의 배점 결과' 부분 색상
  }
`;

export const ScoreTableContainer = styled.div`
  width: 100%;
  height: calc(100% - 8.7rem); // 수정됨
  padding: 0 1.875rem 0 1.875rem; // 수정됨
  box-sizing: border-box;
  background-color: white;
`;

export const Header = styled.div`
  background-color: #a3c0dc;
  width: 100%;
  height: 2.025rem; // 수정됨
  display: flex;
  justify-content: space-between;
  border-bottom: 0.15rem solid #bfbfbf; // 수정됨
  margin-bottom: 0.375rem; // 수정됨
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.9rem; // 수정됨
  font-weight: bold;

  &:first-child {
    width: 50%;
  }

  &:nth-child(2) {
    width: 25%;
  }

  &:last-child {
    width: 25%;
  }
`;
