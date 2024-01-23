import React, { useState } from "react";
import ProfileIcon from "./Avatar.svg";
import CompanyListIcon from "./CompanyList.svg";
import CheckSquareIcon from "./CheckSquare.svg";
import CheckSquareComp from "./CheckSquare";

import * as S from "./style";

// 아이콘과 라벨을 가진 버튼의 타입을 정의합니다.
type SidebarItem = {
  icon: JSX.Element;
};

// 사이드바 아이템 컴포넌트
const SidebarItem: React.FC<SidebarItem> = ({ icon }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <S.StyledIconContainer onClick={toggleActive} isActive={isActive}>
      {icon}
    </S.StyledIconContainer>
  );
};

// 전체 사이드바 컴포넌트
const Sidebar: React.FC = () => {
  // 여기에 사이드바 아이템 데이터를 추가합니다. 예시로 몇 가지 아이템을 넣었습니다.
  const items = [{ icon: <CompanyListIcon /> }, { icon: <CheckSquareComp /> }];

  return (
    <S.StyledSidebar>
      <ProfileIcon />
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && <S.Divider />}
          <SidebarItem icon={item.icon} />
        </React.Fragment>
      ))}
    </S.StyledSidebar>
  );
};

export default Sidebar;
