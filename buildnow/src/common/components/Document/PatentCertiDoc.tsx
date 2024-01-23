import React, { useState, useEffect } from "react";
import * as S from "./style";
import mockData from "../../../../mock/documenturl.json";
// Define the structure of the document data
interface DocumentData {
  [key: string]: string;
}

// List of document titles to display
const documentTitles = [
  "건설업 면허증",
  "특허증",
  "기업 인증서",
  "ISO 9001 인증서",
  "ISO 14001 인증서",
  "ISO 45001 인증서",
  "KOSHA-MS 인증서",
  "KOSHA 18001 인증서",
  "ISO 19650 인증서",
  "표창장",
];

interface PatentCertiDocProps {
  companyName: string;
}

const PatentCertiDoc = ({ companyName }: PatentCertiDocProps) => {
  const [documents, setDocuments] = useState<DocumentData | null>(null);

  useEffect(() => {
    // Assuming mockData is an array of document data
    const companyDocument = mockData.find(
      (doc) => doc.companyName === companyName
    );
    if (companyDocument) {
      setDocuments(companyDocument);
    }
  }, [companyName]);
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader width="30rem">서류명</S.TableHeader>
          <S.TableHeader width="16rem">제출 여부</S.TableHeader>
          <S.TableHeader width="20rem">서류 보기</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {documentTitles.map((title, index) => {
          const documentUrl = documents ? documents[title] : "";
          const isSubmitted = documentUrl !== "";
          return (
            <S.TableRow key={index}>
              <S.TableCell width="36rem" align="left" column="서류명">
                {title}
              </S.TableCell>{" "}
              {/* 서류명: Left-aligned */}
              <S.TableCell
                width="10rem"
                align="center"
                isSubmitted={isSubmitted}
              >
                {isSubmitted ? "제출" : "미제출"}{" "}
                {/* 제출 여부: Center-aligned */}
              </S.TableCell>
              <S.TableCell width="20rem" align="center">
                {isSubmitted && (
                  <S.ViewButton href={documentUrl} target="_blank">
                    바로보기
                  </S.ViewButton>
                )}{" "}
                {/* 서류 보기: Center-aligned */}
              </S.TableCell>
            </S.TableRow>
          );
        })}
      </tbody>
    </S.Table>
  );
};

export default PatentCertiDoc;
