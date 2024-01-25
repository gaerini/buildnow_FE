import React, { useState, useEffect } from "react";
import * as S from "./style";
// import { Document, Page } from "@react-pdf/renderer";
import mockData from "../../../../mock/documenturl.json";
// Define the structure of the document data
interface DocumentData {
  [key: string]: string;
}

// List of document titles to display
const documentTitles = [
  "법인 등기부 등본",
  "사업자 등록증 사본",
  "건설업 등록증",
  "납세(시, 국세) 완납 증명서",
  "회사 조직표",
  "제재처분 또는 행정 처분 확인서",
  "중대재해이력 확인원",
  "경영상태 확인원",
  "회사 소개 자료(지명원, 카달로그 등)",
];

interface OperationProps {
  companyName: string;
}

const Operation = ({ companyName }: OperationProps) => {
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

export default Operation;
