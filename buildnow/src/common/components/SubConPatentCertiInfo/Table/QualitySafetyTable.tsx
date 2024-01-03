// QualitySafetyTable.tsx
import React from "react";
import * as S from "./style"; // Adjust the path as necessary

// Interface for the certification information
interface CertificationInfo {
  보유여부: boolean;
  인증서종류: string;
  인증번호: string;
  인증일: string;
  만료일: string;
}

interface QualitySafetyInfo {
  "ISO 9001": CertificationInfo;
  "ISO 14001": CertificationInfo;
  "ISO 45001": CertificationInfo;
  "KOSHA-MS": CertificationInfo;
  "KOSHA 18001": CertificationInfo;
  "ISO 19650": CertificationInfo;
}

interface QualitySafetyTableProps {
  data: QualitySafetyInfo;
}

const QualitySafetyTable: React.FC<QualitySafetyTableProps> = ({ data }) => {
  // Convert the object to an array and filter for those with 보유여부 === true
  const filteredData = Object.entries(data)
    .filter(([_, certInfo]) => certInfo.보유여부)
    .map(([key, value], index) => ({
      id: index + 1,
      인증서종류: value["인증서종류"],
      인증번호: value["인증번호"],
      인증일: value["인증일"],
      만료일: value["만료일"],
    }));

  return (
    <S.TableWrapper>
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.TableHeaderData>번호</S.TableHeaderData>
            <S.TableHeaderData>인증서 종류</S.TableHeaderData>
            <S.TableHeaderData>인증번호</S.TableHeaderData>
            <S.TableHeaderData>인증일</S.TableHeaderData>
            <S.TableHeaderData>만료일</S.TableHeaderData>
          </S.TableRowHeader>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <S.TableData>{item.id}</S.TableData>
              <S.TableData>{item.인증서종류}</S.TableData>
              <S.TableData>{item.인증번호}</S.TableData>
              <S.TableData>{item.인증일}</S.TableData>
              <S.TableData>{item.만료일}</S.TableData>
            </tr>
          ))}
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default QualitySafetyTable;
