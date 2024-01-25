import React from "react";
import data from "../../../../../mock/companyoverview.json";
import * as S from "./style";

interface BasicProps {
  companyName: string;
}

const Basic = ({ companyName }: BasicProps) => {
  const companyData = data.find(
    (company) => company.companyName === companyName
  );

  if (!companyData) {
    return <div>회사 정보가 없습니다.</div>;
  }

  return (
    <S.Table>
      <tbody>
        <S.TableRow>
          <S.FirstRowCell $header>기업체명</S.FirstRowCell>
          <S.FirstRowCell>{companyData.companyName}</S.FirstRowCell>
          <S.FirstRowCell $header>대표자명</S.FirstRowCell>
          <S.FirstRowCell>{companyData.대표자명}</S.FirstRowCell>
          <S.FirstRowCell $header>설립일</S.FirstRowCell>
          <S.FirstRowCell>{companyData.설립일}</S.FirstRowCell>
        </S.TableRow>
        <S.TableRow>
          <S.TableCell $header>사업자등록번호</S.TableCell>
          <S.TableCell>{companyData["사업자 등록번호"]}</S.TableCell>
          <S.TableCell $header>법인등록번호</S.TableCell>
          <S.TableCell>{companyData["법인 등록번호"]}</S.TableCell>
          <S.TableCell $header>전화번호</S.TableCell>
          <S.TableCell>{companyData.전화번호}</S.TableCell>
        </S.TableRow>
        <S.TableRow>
          <S.TableCell $header>소재지</S.TableCell>
          <S.TableCell>{companyData.소재지}</S.TableCell>
          <S.TableCell $header>주소</S.TableCell>
          <S.TableCell colSpan={3}>{companyData.주소}</S.TableCell>
        </S.TableRow>
        <S.TableRow>
          <S.LastRowCell $header>담당자명</S.LastRowCell>
          <S.LastRowCell>{companyData.담당자명}</S.LastRowCell>
          <S.LastRowCell $header>담당자 전화번호</S.LastRowCell>
          <S.LastRowCell>{companyData["담당자 전화번호"]}</S.LastRowCell>
          <S.LastRowCell $header>담당자 이메일</S.LastRowCell>
          <S.LastRowCell>{companyData["담당자 이메일"]}</S.LastRowCell>
        </S.TableRow>
      </tbody>
    </S.Table>
  );
};

export default Basic;
