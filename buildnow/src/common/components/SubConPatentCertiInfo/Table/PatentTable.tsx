import React from "react";
import * as S from "./style"; // Adjust the path as necessary

interface PatentTableData {
  id: number;
  구분: string;
  특허명: string;
  출원번호: string;
  등록번호: string;
  공고일: string;
}

interface PatentTableProps {
  data: PatentTableData[];
}

const PatentTable: React.FC<PatentTableProps> = ({ data }) => {
  return (
    <S.TableWrapper>
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.TableHeaderData>id</S.TableHeaderData>
            <S.TableHeaderData>구분</S.TableHeaderData>
            <S.TableHeaderData>특허명</S.TableHeaderData>
            <S.TableHeaderData>출원번호</S.TableHeaderData>
            <S.TableHeaderData>등록번호</S.TableHeaderData>
            <S.TableHeaderData>공고일</S.TableHeaderData>

            {/* Add or remove as per actual data */}
          </S.TableRowHeader>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <S.TableData>{item.id}</S.TableData>
              <S.TableData>{item.구분}</S.TableData>
              <S.TableData>{item.특허명}</S.TableData>
              <S.TableData>{item.출원번호}</S.TableData>
              <S.TableData>{item.등록번호}</S.TableData>
              <S.TableData>{item.공고일}</S.TableData>
              {/* Add or remove as per actual data */}
            </tr>
          ))}
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default PatentTable;
