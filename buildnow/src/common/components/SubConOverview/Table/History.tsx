import React, { useEffect, useState } from "react";
import data from "../../../../../mock/companyoverview.json";
import * as S from "./style";

interface HistoryProps {
  companyName: string;
}

const History = ({ companyName }: HistoryProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const companyData = data.find(
    (company) => company.companyName === companyName
  );

  return (
    <S.OtherTable>
      <S.Timeline/>

      <tbody>
        {companyData &&
          Object.entries(companyData["회사 주요 연혁"]).map(
            ([date, event], index) => (
              <tr key={index}>
                <S.HistoryText>
                  <S.DateText>{date}</S.DateText>
                  <S.Circle />
                  <S.EventText>{event}</S.EventText>
                </S.HistoryText>
              </tr>
            )
          )}
      </tbody>
    </S.OtherTable>
  );
};

export default History;
