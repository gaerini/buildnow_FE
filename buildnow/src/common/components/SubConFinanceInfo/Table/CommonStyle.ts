// CommonStyle.ts
import styled from "styled-components";

export const IndividualTableComponent = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
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

