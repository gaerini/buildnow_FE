'use client';
import ApplyIcon from "../LeftNavBarTab/applyIcon.svg";
import HomeIcon from "../LeftNavBarTab/home-02.svg";
import ChartIcon from "../LeftNavBarTab/bar-chart-10.svg";
import styles from "./TopBar.module.css";
import * as S from "./style";
import { useEffect, useState } from "react";
interface TopBarProps{
    tabname: string;
}
export default function TopBar({tabname} : TopBarProps) {

    const renderIcon = () => {
        switch (tabname) {
            case "지원 현황":
                return <ApplyIcon width="35px" height="35px" viewBox="0 0 23 23" className={styles.icon}/>;
            case "배점표 관리":
                return <ChartIcon width="35px" height="35px"  viewBox="0 0 23 23" className={styles.icon}/>;
            default:
                return <HomeIcon width="35px" height="35px" viewBox="0 0 23 23" className={styles.icon}/>;
        }
    };

    return(
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
