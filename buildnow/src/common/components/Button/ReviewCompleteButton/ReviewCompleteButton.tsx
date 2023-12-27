import React, { useState } from "react";
import * as S from "./style";

const ReviewCompleteButton: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    console.log("배점항목 완료 되었다고 state 변경해줍니다");
    setIsChecked(!isChecked);
  };

  return (
    <S.StyledButton isChecked={isChecked} onClick={handleButtonClick}>
      <S.CheckboxIcon isChecked={isChecked} />
      배점표 검토 완료했습니다
    </S.StyledButton>
  );
};

export default ReviewCompleteButton;
