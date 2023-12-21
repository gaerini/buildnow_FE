import CompanyName from "../../common/components/CompanyName/CompanyName";
import LeftNavBarTab from "../../common/components/LeftNavBarTab/LeftNavBarTab";
export default function CompanyInfo() {
  const data = require("../../../mock/profile.json");
  return (
    <>
      <CompanyName
        company={data.company}
        img={data.companyLogoImg}
      ></CompanyName>
      <LeftNavBarTab tabname={"Home"}></LeftNavBarTab>

      <LeftNavBarTab tabname={"지원 현황"}></LeftNavBarTab>

    </>
  );
}
