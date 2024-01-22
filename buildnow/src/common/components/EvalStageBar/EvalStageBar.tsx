import React, { useState } from "react";
import { StageContainer, Stage } from "./style";

const EvalStageBar = () => {
  const [activeStage, setActiveStage] = useState<string>("평가대기");

  const stages = ["평가대기", "기본평가", "심층평가"];

  const handleStageClick = (stage: string) => {
    setActiveStage(stage);
    renderStageComponent(stage); // 클릭 시 해당 stage로 renderStageComponent 호출
  };

  const renderStageComponent = (selectedStage: string) => {
    switch (selectedStage) {
      case "평가대기":
        console.log("평가대기 랜더링");
        break;
      case "기본평가":
        console.log("기본평가 랜더링");
        break;
      case "심층평가":
        console.log("심층평가 랜더링");
        break;
      default:
        return null;
    }
  };

  return (
    <StageContainer>
      {stages.map((stage, index) => (
        <Stage
          key={index}
          isActive={activeStage === stage}
          onClick={() => handleStageClick(stage)}
        >
          {stage}
        </Stage>
      ))}
    </StageContainer>
  );
};

export default EvalStageBar;
