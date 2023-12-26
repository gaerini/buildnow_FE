import CompanyName from "../CompanyName/CompanyName";
import LeftNavBarTab from "../LeftNavBarTab/LeftNavBarTab";
import * as S from "./style";
interface LeftNavBarProp {
    company: string;
    companyLogoImg: string;
    onChange?: (state:string) => void;
}
export default function LeftNavBar({company, companyLogoImg, onChange}: LeftNavBarProp) {
    return (
      <>
        <S.container>
        <CompanyName
          company={company}
          img={companyLogoImg}
        ></CompanyName>
        <LeftNavBarTab tabname={"Home"} onChange={onChange}></LeftNavBarTab>
  
        <LeftNavBarTab tabname={"지원 현황"} onChange={onChange}></LeftNavBarTab>
  
        <LeftNavBarTab tabname={"배점표 관리"} onChange={onChange}></LeftNavBarTab>
        </S.container>
      </>
    );
  }