// ConstructionAbilityEvaluation.tsx
import React from "react";
import * as S from "./style"; // Adjust the path as necessary

interface AbilityEvaluationData {
  id: number;
  공종: string;
  시평액: {
    [year: string]: number;
  };
  전국순위: number;
  지역순위: number;
  "전국순위(%)": string;
  "지역순위(%)": string;
}

interface ConstructionAbilityEvaluationProps {
  data: AbilityEvaluationData[];
}

const ConstructionAbilityEvaluation: React.FC<
  ConstructionAbilityEvaluationProps
> = ({ data }) => {
  // Assume all entries have the same year keys in 시평액
  const yearKeys = data.length > 0 ? Object.keys(data[0].시평액) : [];

  return (
    <S.TableWrapper>
      <S.TableContainer>
        <thead>
          <S.TableRowHeader>
            <S.TableHeaderData>공종명</S.TableHeaderData>
            {yearKeys.map((year) => (
              <S.TableHeaderData key={year}>{year}</S.TableHeaderData>
            ))}
            <S.TableHeaderData>전국순위(2023)</S.TableHeaderData>
            <S.TableHeaderData>지역순위(2023)</S.TableHeaderData>
          </S.TableRowHeader>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <S.TableData>{item.공종}</S.TableData>
              {yearKeys.map((year) => (
                <S.TableData key={year}>
                  {item.시평액[year].toLocaleString()}
                </S.TableData>
              ))}
              <S.TableData>{`${item.전국순위}위 (${item["전국순위(%)"]})`}</S.TableData>
              <S.TableData>{`${item.지역순위}위 (${item["지역순위(%)"]})`}</S.TableData>
            </tr>
          ))}
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default ConstructionAbilityEvaluation;
