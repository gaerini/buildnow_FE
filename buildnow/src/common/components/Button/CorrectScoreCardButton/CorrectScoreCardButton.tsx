import React, { useState } from "react";
import * as S from "./style";
import PencilIcon from "./pencil.svg"; // Importing the SVG as a component

const CorrectScoreCardButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    console.log("해당 업체의 배점표 검토 페이지로 이동"); // 콘솔 로그 추가
    setIsActive((current) => !current); // Toggle isActive state on click
  };

  return (
    <S.StyledButton onClick={handleButtonClick}>
      배점 수정하기
      <S.StyledIcon>
        <PencilIcon />
      </S.StyledIcon>
    </S.StyledButton>
  );
};

export default CorrectScoreCardButton;
