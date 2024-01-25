import React, { useState } from "react";
import * as S from "./style";
import CheckPaperIcon from "./check-paper2.svg"; // Importing the SVG as a component

const ReviewScoreCardButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    console.log("해당 업체의 배점표 검토 페이지로 이동"); // 콘솔 로그 추가
    setIsActive((current) => !current); // Toggle isActive state on click
  };

  return (
    <S.StyledButton onClick={handleButtonClick}>
      <S.StyledIcon>
        <CheckPaperIcon />
      </S.StyledIcon>
      배점표 검토하기
    </S.StyledButton>
  );
};

export default ReviewScoreCardButton;
