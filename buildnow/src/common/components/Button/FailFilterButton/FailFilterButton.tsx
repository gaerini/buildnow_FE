import React from "react";
import * as S from "./style";

// React component using TypeScript
const SortButton: React.FC = () => {
  return (
    <S.Button>
      <span className="button-text">탈락 업체만 보기</span>
    </S.Button>
  );
};

export default SortButton;
