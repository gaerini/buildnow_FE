"use client";
import CheckBox from "../Icon/svgs/CheckBox.svg";
import ScoreIcon from "../Icon/svgs/ScoreIcon.svg";
import styles from "./TopBar.module.css";
import * as S from "./style";

interface TopBarProps {
  activeItem: string;
}
export default function TopBar({ activeItem }: TopBarProps) {
  const renderIcon = () => {
    switch (activeItem) {
      case "지원 결과":
        return <CheckBox />;
      default:
        return <ScoreIcon />;
    }
  };

  return (
    <>
      <S.selectedMenuContainer>
        <S.selectedMenuWrapper>
          {renderIcon()}
          <S.selectedMenu>{activeItem}</S.selectedMenu>
        </S.selectedMenuWrapper>
      </S.selectedMenuContainer>
    </>
  );
}
