"use client";
import styled from "styled-components";

export const Table = styled.table`
  width: 49.5rem; // 수정됨
  height: 8.25rem; // 수정됨
  border: solid 0.075em #d9d9d9;
  border-radius: 0.225rem; // 수정됨
  border-spacing: 0;
  border-collapse: seperate;
  margin-bottom: 2.25rem; // 수정됨
`;

export const TableRow = styled.tr``;

// TableCell 컴포넌트의 prop 타입 정의
interface TableCellProps {
  $header?: boolean; // 이제 $header prop은 선택적이며 boolean 타입입니다.
  colSpan?: number; // colSpan prop도 필요하다면 여기에 추가할 수 있습니다.
}

export const TableCell = styled.td<TableCellProps>`
  background-color: ${(props) => (props.$header ? "#F9FAFA" : "#FFFFFF")};
  font-size: 0.75rem; // 수정됨
  padding: 0.375rem; // 수정됨
  font-weight: ${(props) => (props.$header ? "normal" : "350")};
  border: dashed 0.0375rem #d9d9d9; //수정됨
  text-align: center;
  border-bottom: none;

  &:not(:last-child) {
    border-right: none;
  }

  // 첫 번째 행 첫 번째 셀과 마지막 행 첫 번째 셀의 왼쪽 border-radius 적용
  &:first-child {
    border-top-left-radius: 0.225rem; // 수정됨
    border-bottom-left-radius: 0.225rem; // 수정됨
    border-left: none;
  }

  // 첫 번째 행 마지막 셀과 마지막 행 마지막 셀의 오른쪽 border-radius 적용
  &:last-child {
    border-top-left-radius: 0.225rem; // 수정됨
    border-bottom-left-radius: 0.225rem; // 수정됨
    border-right: none;
  }
`;

// 첫 번째 행의 셀에 대한 스타일
export const FirstRowCell = styled(TableCell)`
  border-top: none;
`;

// 마지막 행의 셀에 대한 스타일
export const LastRowCell = styled(TableCell)`
  border-bottom: none;
`;

// Introduction과 History 컴포넌트에서 사용할 Table 스타일
export const OtherTable = styled(Table)`
  position: relative; // 상대 위치 설정
  background-color: #f9fafa;
  height: auto; // 높이를 자동으로 조절하도록 설정
  padding: 1.125rem; // 수정됨
`;

// Introduction 컴포넌트에서 사용할 텍스트 스타일
export const IntroductionText = styled.td`
font-size: 0.9rem; // 수정됨
line-height: 1.125rem; // 수정됨
`;

// History 컴포넌트에서 사용할 텍스트 스타일
export const HistoryText = styled.td`
  position: relative;
  vertical-align: middle;
  padding-left: 1.5rem; // 수정됨
  padding: 0.75rem 0; // 수정됨
`;

// History 컴포넌트에서 사용할 DateText 스타일
export const DateText = styled.span`
  position: relative;
  font-size: 0.825rem; // 수정됨
  left: 1.5rem; // 수정됨
  color: rgba(0, 0, 0, 0.5); // 검은색에 50% 투명도 적용
  top: 50%; // 상단에서 50% 위치
  transform: translateY(-50%); // Y축 기준으로 50% 이동하여 세로 중앙 정렬
  text-align: right; // 오른쪽 정렬
  width: 2.25rem; // 충분한 너비 제공
`;

// History 컴포넌트에서 사용할 EventText 스타일
export const EventText = styled.span`
font-size: 0.9rem; // 수정됨
left: 3.75rem; // 수정됨
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

// 기존의 Circle 및 HistoryText 스타일은 그대로 유지

export const Circle = styled.span`
  display: inline-block;
  width: 0.3rem; // 수정됨
  height: 0.3rem; // 수정됨
  left: 6.6rem; // 수정됨
  background-color: #297cca;
  border-radius: 50%;
  position: absolute;
  top: 50%; // 상단에서 50% 위치
  transform: translateY(-50%); // Y축 기준으로 50% 이동하여 세로 중앙 정렬
  z-index: 10;
`;

export const Timeline = styled.div`
  position: absolute;
  left: calc(6.6rem + 1.125rem + 0.15rem); // 수정됨
  width: 0.0375rem; // 수정됨
  top: 0;
  bottom: 0;
  background-color: #4e4e4e;
  border-top-right-radius: 7.5rem; // 오른쪽 상단 볼록 곡선
  border-bottom-right-radius: 7.5rem; // 오른쪽 하단 볼록 곡선
  z-index: 3;
`;
