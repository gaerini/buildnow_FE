"use client";

import * as S from "./style";
import Image, { StaticImageData } from "next/image";
import ApplyIcon from "./applyIcon.svg";
import HomeIcon from "./home-02.svg";
import ChartIcon from "./bar-chart-10.svg"
import { useEffect, useState } from "react";
import styles from './LeftNavBar.module.css';


interface LeftNavBarTabProps {
    tabname: string;
}

export default function LeftNavBarTab( {tabname}:LeftNavBarTabProps){
    const [tabName, setTabName] = useState("Home");

    useEffect(()=>{
        setTabName(tabname);
    },[tabname]);

    const renderIcon = () => {
        switch (tabName) {
            case "지원 현황":
                return <ApplyIcon className={styles.icon}/>;
            case "배점표 관리":
                return <ChartIcon className={styles.icon}/>;
            default:
                return <HomeIcon className={styles.icon}/>;
        }
    };

    return(<>
        <S.tabWrapper>
            {renderIcon()}
            <S.tabFontDiv>
                {tabname}
            </S.tabFontDiv>
        </S.tabWrapper>
    </>);
}