import * as S from "./style";

interface CompanyNameProps {
  company: string;
  img: string;
}

export default function CompanyName({ company, img }: CompanyNameProps) {
  return (
    <>
      <S.CompanyComponentWrapper>
        <S.CompanyLetter>COMPANY</S.CompanyLetter>
        <S.CompanyProfileWrapper>
          <S.CompanyProfileImg src={img}></S.CompanyProfileImg>
          <S.CompanyWrapper>{company}</S.CompanyWrapper>
        </S.CompanyProfileWrapper>
      </S.CompanyComponentWrapper>
    </>
  );
}
