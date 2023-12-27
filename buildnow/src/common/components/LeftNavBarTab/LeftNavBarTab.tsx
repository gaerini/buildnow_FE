"use client";

import * as S from "./style";
import Image, { StaticImageData } from "next/image";
import ApplyIcon from "./applyIcon.svg";
import HomeIcon from "./home-02.svg";
import ChartIcon from "./bar-chart-10.svg";
import { useEffect, useState } from "react";
import styles from "./LeftNavBar.module.css";

interface LeftNavBarTabProps {
  tabname: string;
  onChange?: (state: string) => void;
}

export default function LeftNavBarTab({
  tabname,
  onChange,
}: LeftNavBarTabProps) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsHover(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsHover(false);
  };

  const renderIcon = () => {
    switch (tabname) {
      case "지원 현황":
        return (
          <ApplyIcon className={isHover ? styles.hoverOn : styles.hoverOff} />
        );
      case "배점표 관리":
        return (
          <ChartIcon className={isHover ? styles.hoverOn : styles.hoverOff} />
        );
      default:
        return (
          <HomeIcon className={isHover ? styles.hoverOn : styles.hoverOff} />
        );
    }
  };

  const updateState = () => {
    const newState = tabname;
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <>
      <S.menuWrapper
        onClick={updateState}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHover ? "#B2D1F8" : "transparent",
          transition: "backgroundColor 0.3s ease",
        }}
      >
        <S.tabWrapper>
          {renderIcon()}
          <S.tabFontDiv style={{ color: isHover ? "black" : "#94A3B8" }}>
            {tabname}
          </S.tabFontDiv>
        </S.tabWrapper>
      </S.menuWrapper>
    </>
  );
}
