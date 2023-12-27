import React from "react";
import { AddressTagStyled } from "../style";

// 주소

type AddressTagProps = {
  address: string;
};

const AddressTag: React.FC<AddressTagProps> = ({ address }) => {
  return <AddressTagStyled>{address}</AddressTagStyled>;
};

export default AddressTag;
