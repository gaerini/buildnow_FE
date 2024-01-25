import React, { useState } from "react";
import * as S from "./style";

interface NumApply {
  [key: string]: number;
}

const numApply: NumApply = {
  토공사: 1,
  포장공사: 2,
  "보링 그라우팅 파일공사": 3,
  실내건축공사: 4,
  "금속구조물 창호 온실공사": 5,
  "지붕판금 건축물 조립공사": 6,
  도장공사: 7,
  "습식 방수공사": 8,
  석공사: 9,
  조경식재공사: 10,
  조경시설물설치공사: 11,
  "철근 콘크리트 공사": 12,
  "구조물해체 비계공사": 13,
  상하수도설비공사: 14,
  "철도 궤도공사": 15,
  철강구조물공사: 16,
  수중공사: 17,
  준설공사: 18,
  승강기설치공사: 19,
  삭도설치공사: 20,
  기계설비공사: 21,
  "가스시설공사(제1종)": 22,
  "가스시설공사(제2종)": 23,
  "가스시설공사(제3종)": 24,
  "난방공사(제1종)": 25,
  "난방공사(제2종)": 26,
  "난방공사(제3종)": 27,
  전체: 378,
};

const WorkTypeDropDown: React.FC = () => {
  const [selectedWorkType, setSelectedWorkType] = useState<string>("전체");
  const [selectedNumApply, setSelectedNumApply] = useState<number>(
    Object.values(numApply).reduce((acc, curr) => acc + curr, 0) // Initialize with the total number
  );
  const [$isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (workType: string) => {
    console.log(`${workType} 필터링 페이지를 렌더링 합니다`); // 여기에서 필터링된 페이지 보여주는 코드 짜면 됨!
    setSelectedWorkType(workType);
    setIsOpen(false); // 드롭다운 리스트 닫아줌
    setSelectedNumApply(numApply[workType]); // 지원한 업체의 개수
  };

  return (
    <S.DropdownContainer>
      <S.DropdownWrapper>
        <S.Label>공종명 :</S.Label>
        <S.DropdownHeader onClick={() => setIsOpen(!$isOpen)}>
          <S.SelectedWorkType>{selectedWorkType}</S.SelectedWorkType>
          <S.DropdownIcon $isOpen={$isOpen} />
          {$isOpen && (
            <S.DropdownList>
              {Object.entries(numApply).map(([workType, numApplications]) => (
                <S.DropdownListItem
                  key={workType}
                  isSelected={selectedWorkType === workType}
                  onClick={() => handleSelect(workType)}
                >
                  {workType}
                  <S.ListItemApplyCount isVisible={true}>
                    {numApplications}
                  </S.ListItemApplyCount>
                </S.DropdownListItem>
              ))}
            </S.DropdownList>
          )}
        </S.DropdownHeader>
      </S.DropdownWrapper>
    </S.DropdownContainer>
  );
};

export default WorkTypeDropDown;
