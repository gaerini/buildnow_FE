// CommonStyle.ts
import styled from "styled-components";

export const IndividualTableComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TableRow = styled.tr`
  &:first-child {
    background-color: #f9fafa;
  }
`;
