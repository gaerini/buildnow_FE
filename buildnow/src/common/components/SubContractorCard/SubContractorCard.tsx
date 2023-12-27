import React from "react";
import WorkTypeTag from "./Tags/WorkType";
import AddressTag from "./Tags/AddressTag";
import RankingTag from "./Tags/RankingTag";
import NewTag from "./Tags/NewTag";
import PatentTag from "./Tags/PatentTag";
import RecTag from "./Tags/RecTag";
import * as S from "./style";

const mockData = {
  companyName: "L이앤씨",
  시평액: "24.8%",
  위치: "경기도",
  공종: "철근콘크리트",
  신규: true,
  특허: true,
  임원진추천: true,
  지원날짜: "2023-12-05",
};

const SubContractorCard = () => {
  // You can also destructure your mockData here if needed
  const { companyName, 시평액, 위치, 공종, 신규, 특허, 임원진추천, 지원날짜 } =
    mockData;

  // Convert 시평액 to a rank value as needed by the RankingTag
  const ranking = parseFloat(시평액); // assuming 시평액 is a string in the mockData

  const handleClick = () => {
    console.log("해당 업체 상세정보 페이지로 이동합니다");
  };

  return (
    <S.Card onClick={handleClick}>
      <S.Date>{`지원 날짜 : ${지원날짜}`}</S.Date>
      {/* <S.Divider /> */}
      <S.Content>
        <S.CompanyName>{companyName}</S.CompanyName>
        <S.Tags>
          {신규 && <NewTag />}
          {특허 && <PatentTag />}
          {임원진추천 && <RecTag />}
        </S.Tags>
      </S.Content>
      {/* <S.Divider /> */}
      <S.TagList>
        <WorkTypeTag workType={공종} />
        <AddressTag address={위치} />
        <RankingTag ranking={ranking} />
      </S.TagList>
    </S.Card>
  );
};

export default SubContractorCard;
