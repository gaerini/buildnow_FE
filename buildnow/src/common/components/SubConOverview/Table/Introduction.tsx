import React from "react";
import data from "../../../../../mock/companyoverview.json";
import * as S from "./style";

interface IntroductionProps {
  companyName: string;
}

const Introduction = ({ companyName }: IntroductionProps) => {
  const companyData = data.find(
    (company) => company.companyName === companyName
  );

  return (
    <S.OtherTable>
      <tbody>
        <tr>
          <S.IntroductionText>
            {companyData &&
              companyData["회사 소개"].split(".").map((sentence, index) => (
                <React.Fragment key={index}>
                  {sentence.trim()}.
                  {index < companyData["회사 소개"].split(".").length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
          </S.IntroductionText>
        </tr>
      </tbody>
    </S.OtherTable>
  );
};

export default Introduction;
