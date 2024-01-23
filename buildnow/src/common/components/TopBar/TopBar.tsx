"use client";
import CompanyListIcon from "../NewLeftNavBar/CompanyList.svg";
import CheckBoxIcon from "../NewLeftNavBar/CheckSquare.svg";
import styles from "./TopBar.module.css";
import * as S from "./style";

interface TopBarProps {
  tabname: string;
}
export default function TopBar({ tabname }: TopBarProps) {
  const renderIcon = () => {
    switch (tabname) {
      case "지원 현황":
        return (
          <CompanyListIcon
            width="100%"
            height="100%"
            viewBox="10 5 50 50"
            className={styles.icon}
          />
        );
      case "지원 결과":
        return (
          <CheckBoxIcon
            width="35px"
            height="35px"
            viewBox="0 0 10 10"
            className={styles.icon}
          />
        );
    }
  };

  return (
    <>
      <S.selectedMenuContainer>
        <S.selectedMenuWrapper>
          {renderIcon()}
          <S.selectedMenu>{tabname}</S.selectedMenu>
        </S.selectedMenuWrapper>
      </S.selectedMenuContainer>
    </>
  );
}
