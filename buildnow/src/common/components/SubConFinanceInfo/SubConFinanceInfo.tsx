// SubConFinanceInfo.tsx
import React, { useState, useEffect } from "react";
import mockData from "../../../../mock/subcontractorInfo.json";
import MiddleSizeTable from "./Table/MiddleSizeTable/MiddleSizeTable";
import SmallSizeTable from "./Table/SmallSizeTable/SmallSizeTable";
import * as S from "./style";
import LargeSizeTable from "./Table/LargeSizeTable/LargeSizeTable";

// Props 타입 정의
interface SubConFinanceInfoProps {
  companyName: string;
}

const SubConFinanceInfo: React.FC<SubConFinanceInfoProps> = ({
  companyName,
}) => {
  const [financeInfo, setFinanceInfo] = useState<any>(null);

  useEffect(() => {
    // companyName과 일치하는 데이터를 찾습니다.
    const dataItem = mockData.find(
      (item) => item["기업 개요"]["companyName"] === companyName
    );
    if (dataItem) {
      setFinanceInfo(dataItem["재무 부문"]);
    }
  }, [companyName]);

  // financeInfo가 없으면 아무 것도 렌더링하지 않음
  if (!financeInfo) {
    return <div>Loading or no data found...</div>;
  }

  return (
    <>
      <S.TableComponent>
        <S.TableTitle>이크레더블 등급</S.TableTitle>
        <S.Container>
          <S.SmallContainer>
            <S.SmallIndividualTableContainer>
              <SmallSizeTable name="신용 등급" data={financeInfo["신용등급"]} />
            </S.SmallIndividualTableContainer>
            <S.SmallIndividualTableContainer>
              <SmallSizeTable
                name="현급 흐름 등급"
                data={financeInfo["현금흐름등급"]}
              />
            </S.SmallIndividualTableContainer>
            <S.SmallIndividualTableContainer>
              <SmallSizeTable
                name="WATCH 등급"
                data={financeInfo["WATCH등급"]}
              />
            </S.SmallIndividualTableContainer>
            <S.SmallIndividualTableContainer>
              <SmallSizeTable
                name="자금 조달 여력 분석"
                data={financeInfo["자금조달여력분석"]}
              />
            </S.SmallIndividualTableContainer>
          </S.SmallContainer>
        </S.Container>
      </S.TableComponent>

      <S.TableComponent>
        <S.TableTitle>수익성</S.TableTitle>
        <S.Container>
          <S.MiddleIndividualTableContainer>
            <MiddleSizeTable name="순이익률" data={financeInfo["순이익률"]} />
          </S.MiddleIndividualTableContainer>
          <S.MiddleIndividualTableContainer>
            <MiddleSizeTable
              name="영업이익률"
              data={financeInfo["영업이익률"]}
            />
          </S.MiddleIndividualTableContainer>
        </S.Container>
      </S.TableComponent>

      <S.TableComponent>
        <S.TableTitle>안정성</S.TableTitle>
        <S.Container>
          <S.MiddleIndividualTableContainer>
            <MiddleSizeTable name="유동비율" data={financeInfo["유동비율"]} />
          </S.MiddleIndividualTableContainer>
          <S.MiddleIndividualTableContainer>
            <MiddleSizeTable name="당좌비율" data={financeInfo["당좌비율"]} />
          </S.MiddleIndividualTableContainer>
          <S.MiddleIndividualTableContainer>
            <MiddleSizeTable name="부채비율" data={financeInfo["부채비율"]} />
          </S.MiddleIndividualTableContainer>
          <S.MiddleIndividualTableContainer>
            <MiddleSizeTable
              name="차입금의존도"
              data={financeInfo["차입금의존도"]}
            />
          </S.MiddleIndividualTableContainer>
        </S.Container>
      </S.TableComponent>
      <S.TableComponent>
        <S.TableTitle>주요 재무 정보</S.TableTitle>
        <S.LargeContainer>
          <LargeSizeTable
            totalAssets={financeInfo["총자산"]}
            totalLiabilities={financeInfo["부채총계"]}
            totalEquity={financeInfo["자본총계"]}
            sales={financeInfo["매출액"]}
            operatingIncome={financeInfo["영업이익"]}
            netIncome={financeInfo["당기순이익"]}
          />
        </S.LargeContainer>
      </S.TableComponent>
    </>
  );
};

export default SubConFinanceInfo;
