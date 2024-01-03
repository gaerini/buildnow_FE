// AuthTable.tsx
import React from "react";
import * as S from "./style"; // Adjust the path as necessary

// Interface for the certification information
interface AuthInfo {
  기업부설연구소: boolean;
  연구개발전담부서: boolean;
  기술혁신형중소기업: boolean;
  벤처기업확인: boolean;
  부품소재전문기업확인: boolean;
  경영혁신형중소기업: boolean;
}

type AuthKey = keyof AuthInfo; // This type will be "기업부설연구소" | "연구개발전담부서" | ...

interface AuthTableProps {
  data: AuthInfo;
}

const AuthTable: React.FC<AuthTableProps> = ({ data }) => {
  // Prepare the data for the first and second column groups
  const firstGroupKeys: AuthKey[] = [
    "기업부설연구소",
    "연구개발전담부서",
    "기술혁신형중소기업",
  ];
  const secondGroupKeys: AuthKey[] = [
    "벤처기업확인",
    "부품소재전문기업확인",
    "경영혁신형중소기업",
  ];

  return (
    <S.TableWrapper>
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.AuthTableHeaderData>인증 종류</S.AuthTableHeaderData>
            <S.AuthTableHeaderData>상태</S.AuthTableHeaderData>
            <S.AuthTableHeaderData>인증 종류</S.AuthTableHeaderData>
            <S.AuthTableHeaderData>상태</S.AuthTableHeaderData>
          </S.TableRowHeader>
        </thead>
        <tbody>
          {firstGroupKeys.map((key, index) => (
            <tr key={key}>
              {/* First group */}
              <S.AuthTableData>{key}</S.AuthTableData>
              <S.AuthTableData>{data[key] ? "보유" : "-"}</S.AuthTableData>

              {/* Second group */}
              <S.AuthTableData>{secondGroupKeys[index]}</S.AuthTableData>
              <S.AuthTableData>
                {data[secondGroupKeys[index]] ? "보유" : "-"}
              </S.AuthTableData>
            </tr>
          ))}
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default AuthTable;
