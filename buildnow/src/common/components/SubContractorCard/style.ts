"use client";
import styled from "styled-components";

export const Card = styled.div`
  width: 16.5rem; //수정됨
  background: white;
  border-radius: 0.225rem; //수정됨
  box-shadow: 0 2px 0.1875rem rgba(0, 0, 0, 0.1); //수정됨
  font-family: "Arial", sans-serif;
  height: 7.5rem; //수정됨
  white-space: nowrap;
  display: flex;
  flex-direction: column; // 자식 요소들을 세로로 쌓음
  background-color: #f5f5f5;
  border: 0.5px solid ${(props) => "#D9D9D9"};
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.525rem; //수정됨
  white-space: nowrap;
  margin-left: 0.375rem; //수정됨
  color: #5a5a5a;
  height: 15%;
`;

export const Content = styled.div`
  padding: 0.1875rem 0rem; //수정됨
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  white-space: nowrap;
  background-color: white;
  height: 65%;
  border-top: 0.5px solid #d9d9d9;
  border-bottom: 0.5px solid #d9d9d9;
`;

export const CompanyName = styled.div`
  margin-left: 0.375rem; //수정됨
  font-size: 1.5rem; //수정됨
  font-weight: bold;
  white-space: nowrap;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: nowrap;
`;

export const TagList = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-left: 0.375rem; //수정됨
`;

const BaseTag = styled.span`
  display: flex;
  align-items: center; // 세로 중앙 정렬
  justify-content: center; // 가로 중앙 정렬
  padding: 0.1875rem 0.45rem; //수정됨
  margin-right: 0.375rem; //수정됨
  border-radius: 0.1875rem; //수정됨
  font-size: 0.75rem; // 수정됨
  white-space: nowrap;
  width: 4.725rem; // 수정됨
  height: 0.825rem; // 수정됨
`;

export const WorkTypeTagStyled = styled(BaseTag)`
  background-color: #33976d;
  color: white;
  margin-right: 0.075rem; //수정됨
`;

export const AddressTagStyled = styled(BaseTag)`
  background-color: #335c64;
  color: white;
  margin-right: 0.075rem; //수정됨
  align-items: center;
`;

const getRankStyles = ($rank: number) => {
  if ($rank <= 1) {
    return { backgroundColor: "#5F9EA0", color: "white" };
  } else if ($rank <= 3) {
    return { backgroundColor: "#69A8AA", color: "white" };
  } else if ($rank <= 5) {
    return { backgroundColor: "#73B2B4", color: "white" };
  } else if ($rank <= 10) {
    return { backgroundColor: "#7DBCBE", color: "white" };
  } else if ($rank <= 15) {
    return { backgroundColor: "#87C6C8", color: "white" };
  } else if ($rank <= 20) {
    return { backgroundColor: "#91D0D2", color: "black" };
  } else if ($rank <= 30) {
    return { backgroundColor: "#96D5D7", color: "black" };
  } else if ($rank <= 40) {
    return { backgroundColor: "#9BDADC", color: "black" };
  } else if ($rank <= 50) {
    return { backgroundColor: "#A0DFE1", color: "black" };
  } else {
    return { backgroundColor: "#A5E3E6", color: "black" };
  }
};

// Styled component
export const RankingTagStyled = styled(BaseTag)<{ $rank: number }>`
  ${({ $rank }) => {
    const { backgroundColor, color } = getRankStyles($rank);
    return `
        background-color: ${backgroundColor};
        color: ${color};
        margin-right: 0.075rem; //수정됨
      `;
  }}
`;

export const NewTagStyled = styled(BaseTag)`
  background-color: #d5e8ff;
  color: #409efe;
  border-radius: 0.1875rem; //수정됨
`;

export const PatentTagStyled = styled(BaseTag)`
  background-color: #9170ff;
  color: white;
  border-radius: 0.1875rem; //수정됨
`;

export const RecTagStyled = styled(BaseTag)`
  background-color: rgba(145, 112, 255, 0.3);
  color: #9170ff;
  border-radius: 0.1875rem; //수정됨
`;

export const Divider = styled.hr`
  height: 1px;
  border: 0;
  width : 100%
  margin : 0;
  background-color: #d4d4d8;
`;
// Add any additional styles or modifications as needed
