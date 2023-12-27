import React from "react";
import { WorkTypeTagStyled } from "../style";

// 공종
type WorkTypeTagProps = {
  workType: string;
};

const SpecialtyTag: React.FC<WorkTypeTagProps> = ({ workType }) => {
  return <WorkTypeTagStyled>{workType}</WorkTypeTagStyled>;
};

export default SpecialtyTag;
