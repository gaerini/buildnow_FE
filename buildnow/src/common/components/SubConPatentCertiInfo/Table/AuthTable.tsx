// Table.tsx
import React from "react";
import * as S from "./style"; // Adjust the path as necessary

// Interface for the certification information
interface AuthInfo {
  기업부설연구소: boolean;
  연구개발전담부소: boolean;
  기술혁신형중소기업: boolean;
  벤처기업확인: boolean;
  부품소재전문기업확인: boolean;
  경영혁신형중소기업: boolean;
}

interface AuthTableProps {
  data: AuthInfo;
}

const Table: React.FC<AuthTableProps> = ({ data }) => {
  // Filter the entries to include only those with a value of true
  const confirmedEntries = Object.entries(data).filter(([, value]) => value);

  return (
    <S.TableWrapper>
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.TableHeaderData>인증 종류</S.TableHeaderData>
            <S.TableHeaderData>상태</S.TableHeaderData>
          </S.TableRowHeader>
        </thead>
        <tbody>
          {confirmedEntries.length > 0 ? (
            confirmedEntries.map(
              (
                [key] // No need to display value since it's always true here
              ) => (
                <tr key={key}>
                  <S.TableData>{key}</S.TableData>
                  <S.TableData>확인됨</S.TableData>
                </tr>
              )
            )
          ) : (
            <tr>
              <S.TableData colSpan={2}>
                확인된 인증 정보가 없습니다.
              </S.TableData>
            </tr>
          )}
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default Table;
