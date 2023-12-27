import React, { useState } from "react";
import * as S from "./style";
import RightArrowIcon from "./right-arrow.svg"; // Importing the SVG as a component

const MoveToBasicEvalButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    console.log("기본 평가 페이지로 이동합니다.");
    setIsActive(!isActive); // Toggle isActive state on click
  };

  return (
    <S.StyledButton isActive={isActive} onClick={handleButtonClick}>
      기본 평가로 이동하기
      <S.StyledIcon isActive={isActive}>
        <RightArrowIcon width="10px" height="10px" />
      </S.StyledIcon>
    </S.StyledButton>
  );
};

export default MoveToBasicEvalButton;
