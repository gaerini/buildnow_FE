import React, { useState } from "react";
import SearchIcon from "../../../components/Icon/svgs/SearchIcon.svg";
import * as S from "./style";

// The SearchBar component
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <S.SearchContainer>
      <S.StyledInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <SearchIcon className="button-icon" />
    </S.SearchContainer>
  );
};

export default SearchBar;
