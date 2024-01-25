"use client";
import styled from "styled-components";

export const Table = styled.table`
  width: 66rem;
  height: 11rem;
  border: solid 0.1em #d9d9d9;
  border-radius: 0.3rem;
  border-spacing: 0;
  border-collapse: seperate;
  margin-bottom: 3rem;
`;

export const TableRow = styled.tr``;

// TableCell 컴포넌트의 prop 타입 정의
interface TableCellProps {
  header?: boolean; // 이제 header prop은 선택적이며 boolean 타입입니다.
  colSpan?: number; // colSpan prop도 필요하다면 여기에 추가할 수 있습니다.
}

export const TableCell = styled.td<TableCellProps>`
  background-color: ${(props) => (props.header ? "#F9FAFA" : "#FFFFFF")};
  font-size: 1rem;
  font-weight: ${(props) => (props.header ? "normal" : "350")};
  border: dashed 0.05rem #d9d9d9;
  text-align: center;
  padding: 0.5rem;
  border-bottom: none;

  &:not(:last-child) {
    border-right: none;
  }

  // 첫 번째 행 첫 번째 셀과 마지막 행 첫 번째 셀의 왼쪽 border-radius 적용
  &:first-child {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    border-left: none;
  }

  // 첫 번째 행 마지막 셀과 마지막 행 마지막 셀의 오른쪽 border-radius 적용
  &:last-child {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
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
  padding: 1.5rem;
`;

// Introduction 컴포넌트에서 사용할 텍스트 스타일
export const IntroductionText = styled.td`
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

// History 컴포넌트에서 사용할 텍스트 스타일
export const HistoryText = styled.td`
  position: relative;
  vertical-align: middle;
  padding-left: 2rem; // 원을 포함하여 왼쪽에 충분한 공간 확보
  padding: 1rem 0; // 하단에 3rem의 간격 추가
`;

// History 컴포넌트에서 사용할 DateText 스타일
export const DateText = styled.span`
  position: relative;
  font-size: 1.1rem;
  left: 2rem;
  color: rgba(0, 0, 0, 0.5); // 검은색에 50% 투명도 적용
  top: 50%; // 상단에서 50% 위치
  transform: translateY(-50%); // Y축 기준으로 50% 이동하여 세로 중앙 정렬
  text-align: right; // 오른쪽 정렬
  width: 3rem; // 충분한 너비 제공
`;

// History 컴포넌트에서 사용할 EventText 스타일
export const EventText = styled.span`
  font-size: 1.2rem;
  position: relative;
  left: 5rem;
  top: 50%;
  transform: translateY(-50%);
`;

// 기존의 Circle 및 HistoryText 스타일은 그대로 유지

export const Circle = styled.span`
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background-color: #297cca;
  border-radius: 50%;
  position: absolute;
  left: 8.8rem;
  top: 50%; // 상단에서 50% 위치
  transform: translateY(-50%); // Y축 기준으로 50% 이동하여 세로 중앙 정렬
  z-index: 10;
`;

export const Timeline = styled.div`
  position: absolute;
  left: calc(8.8rem + 1.5rem + 0.2rem); // Circle의 중심과 일치하도록 조정
  top: 0;
  bottom: 0;
  width: 0.05rem;
  background-color: #4e4e4e;
  border-top-right-radius: 10rem; // 오른쪽 상단 볼록 곡선
  border-bottom-right-radius: 10rem; // 오른쪽 하단 볼록 곡선
  z-index: 3;
`;
