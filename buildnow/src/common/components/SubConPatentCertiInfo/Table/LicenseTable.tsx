import React from "react";
import * as S from "./style"; // Adjust the path as necessary

interface LicenseTableData {
  id: number;
  구분: string;
  면허명: string;
  면허번호: string;
  취득일자: string;
  갱신일자: string;
  상태: string; // 상태 is optional as it may not be present in all objects
  등록발행처: string;
}

interface LicenseTableProps {
  data: LicenseTableData[];
}

const LicenseTable: React.FC<LicenseTableProps> = ({ data }) => {
  return (
    <S.TableWrapper>
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.TableHeaderData>id</S.TableHeaderData>
            <S.TableHeaderData>구분</S.TableHeaderData>
            <S.TableHeaderData>면허명</S.TableHeaderData>
            <S.TableHeaderData>면허번호</S.TableHeaderData>
            <S.TableHeaderData>취득일자</S.TableHeaderData>
            <S.TableHeaderData>갱신일자</S.TableHeaderData>
            <S.TableHeaderData>상태</S.TableHeaderData>
            <S.TableHeaderData>등록/발행처</S.TableHeaderData>
            {/* Add or remove as per actual data */}
          </S.TableRowHeader>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <S.TableData>{item.id}</S.TableData>
              <S.TableData>{item.구분}</S.TableData>
              <S.TableData>{item.면허명}</S.TableData>
              <S.TableData>{item.면허번호}</S.TableData>
              <S.TableData>{item.취득일자}</S.TableData>
              <S.TableData>{item.갱신일자}</S.TableData>
              <S.TableData>{item.상태}</S.TableData>
              <S.TableData>{item.등록발행처}</S.TableData>
              {/* Add or remove as per actual data */}
            </tr>
          ))}
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default LicenseTable;
