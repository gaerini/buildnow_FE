// ConstructionMain.tsx
import React from "react";
import * as S from "./style"; // Adjust the path as necessary

interface MainData {
  "주 공사 분야": string[];
  "주 공사 지역": string[];
}

interface ConstructionMainProps {
  data: MainData;
}

const ConstructionMain: React.FC<ConstructionMainProps> = ({ data }) => {
  // Join the array elements into a single string for display
  const constructionFields = data["주 공사 분야"].join(", ");
  const constructionRegions = data["주 공사 지역"].join(", ");

  return (
    <S.TableWrapper>
      {/* Table for 주 공사 분야 */}
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.TableHeaderData>주 공사 분야</S.TableHeaderData>
          </S.TableRowHeader>
        </thead>
        <tbody>
          <tr>
            <S.TableData>{constructionFields}</S.TableData>
          </tr>
        </tbody>
      </S.TableContainer>

      {/* Table for 주 공사 지역 */}
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.TableHeaderData>주 공사 지역</S.TableHeaderData>
          </S.TableRowHeader>
        </thead>
        <tbody>
          <tr>
            <S.TableData>{constructionRegions}</S.TableData>
          </tr>
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default ConstructionMain;
