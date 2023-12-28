import React from "react";
import WorkTypeTag from "./Tags/WorkType";
import AddressTag from "./Tags/AddressTag";
import RankingTag from "./Tags/RankingTag";
import NewTag from "./Tags/NewTag";
import PatentTag from "./Tags/PatentTag";
import RecTag from "./Tags/RecTag";
import * as S from "./style";

type SubConData = {
  companyName: string;
  시평액: string;
  소재지: string;
  공종: string;
  신규: boolean;
  특허: boolean;
  임원진추천: boolean;
  지원날짜: string;
};

// TODO : 지금은 subConData에 모든 정보들을 받아오지만, 추후 companyName만 Prop으로 받아서 컴포넌트 안에서 데이터를 파싱할 수 있도록 수정 필요
const SubContractorCard: React.FC<{ subConData: SubConData }> = ({
  subConData,
}) => {
  const ranking = parseFloat(subConData.시평액); // assuming 시평액 is a string in the mockData

  const handleClick = () => {
    console.log("해당 업체 상세정보 페이지로 이동합니다");
  };

  return (
    <S.Card onClick={handleClick}>
      <S.Date>{`지원 날짜 : ${subConData.지원날짜}`}</S.Date>
      {/* <S.Divider /> */}
      <S.Content>
        <S.CompanyName>{subConData.companyName}</S.CompanyName>
        <S.Tags>
          {subConData.신규 && <NewTag />}
          {subConData.특허 && <PatentTag />}
          {subConData.임원진추천 && <RecTag />}
        </S.Tags>
      </S.Content>
      {/* <S.Divider /> */}
      <S.TagList>
        <WorkTypeTag workType={subConData.공종} />
        <AddressTag address={subConData.소재지} />
        <RankingTag ranking={ranking} />
      </S.TagList>
    </S.Card>
  );
};

export default SubContractorCard;
