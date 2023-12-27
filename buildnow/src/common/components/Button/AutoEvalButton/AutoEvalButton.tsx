import React, { useState } from "react";
import * as S from "./style";
import CheckCompleteIcon from "./check-done.svg"; // Importing the SVG as a component

const AutoEvalButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    console.log("자동평가 진행하기 페이지로 이동합니다"); // 콘솔 로그 추가
    setIsActive((current) => !current); // Toggle isActive state on click
  };

  return (
    <S.StyledButton isActive={isActive} onClick={handleButtonClick}>
      자동평가 진행하기
      <S.StyledIcon isActive={isActive}>
        <CheckCompleteIcon />
      </S.StyledIcon>
    </S.StyledButton>
  );
};

export default AutoEvalButton;
