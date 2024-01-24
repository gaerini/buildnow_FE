import React, { useState } from "react";
import ProfileIcon from "../Icon/svgs/Avatar.svg";
import CheckBox2 from "../Icon/svgs/CheckBox.svg";
import ScoreIcon from "../Icon/svgs/ScoreIcon.svg";
import * as S from "./style";

// 아이콘과 라벨을 가진 버튼의 타입을 정의합니다.
type SidebarItemProps = {
  icon: JSX.Element;
  name: string;
  isActive: boolean;
  onSetActive: (name: string) => void;
};

type SidebarProps = {
  items: {
    icon: JSX.Element;
    name: string;
  }[];
  handleItemClick: (name: string) => void;
  activeItem: string;
};

// 사이드바 아이템 컴포넌트
const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  name,
  isActive,
  onSetActive,
}) => {
  return (
    <S.StyledIconContainer
      isActive={isActive}
      onClick={() => onSetActive(name)}
    >
      {icon}
    </S.StyledIconContainer>
  );
};

// 전체 사이드바 컴포넌트
const Sidebar: React.FC<SidebarProps> = ({
  items,
  handleItemClick,
  activeItem,
}) => {
  return (
    <S.StyledSidebar>
      <ProfileIcon />
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && <S.Divider />}
          <SidebarItem
            icon={item.icon}
            name={item.name}
            onSetActive={handleItemClick}
            isActive={activeItem === item.name}
          />
        </React.Fragment>
      ))}
    </S.StyledSidebar>
  );
};

export default Sidebar;
