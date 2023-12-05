import CompanyName from "../../common/components/CompanyName/CompanyName";

export default function CompanyInfo() {
  const data = require("../../../mock/profile.json");
  return (
    <>
      <CompanyName
        company={data.company}
        img={data.companyLogoImg}
      ></CompanyName>
    </>
  );
}
