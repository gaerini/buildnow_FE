// ConstructionHistory.tsx
import React from "react";
import * as S from "./style"; // Adjust the path as necessary

interface ConstructionData {
  id: number;
  발주처: string;
  구분: string;
  원도급사: string;
  공종: string;
  공사명: string;
  계약금액: number;
  공사시작: string;
  공사종료예정: string;
  누적기성액: number;
  미기성액: number;
}

interface ConstructionHistoryProps {
  data: ConstructionData[];
}

const ConstructionHistory: React.FC<ConstructionHistoryProps> = ({ data }) => {
  return (
    <S.TableWrapper>
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.TableHeaderData>발주처</S.TableHeaderData>
            <S.TableHeaderData>구분</S.TableHeaderData>
            <S.TableHeaderData>원도급사</S.TableHeaderData>
            <S.TableHeaderData>공종</S.TableHeaderData>
            <S.TableHeaderData>공사명</S.TableHeaderData>
            <S.TableHeaderData>계약금액</S.TableHeaderData>
            <S.TableHeaderData>공사기간</S.TableHeaderData>
            <S.TableHeaderData>누적기성액</S.TableHeaderData>
            <S.TableHeaderData>미기성액</S.TableHeaderData>
          </S.TableRowHeader>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <S.TableData>{item.발주처}</S.TableData>
              <S.TableData>{item.구분}</S.TableData>
              <S.TableData>{item.원도급사}</S.TableData>
              <S.TableData>{item.공종}</S.TableData>
              <S.TableData>{item.공사명}</S.TableData>
              <S.TableData>{item.계약금액.toLocaleString()}</S.TableData>
              <S.TableData>{`${item.공사시작} ~ ${item.공사종료예정}`}</S.TableData>
              <S.TableData>{item.누적기성액.toLocaleString()}</S.TableData>
              <S.TableData>{item.미기성액.toLocaleString()}</S.TableData>
            </tr>
          ))}
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default ConstructionHistory;
