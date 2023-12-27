// SubConFinanceInfo/style.ts
import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem; /* space between label and table */
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.5rem; /* space between label and table */
`;

export const LabelBox = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: black;
  margin-right: 0.5rem; /* space between box and label text */
`;

export const StyledTable = styled.table`
  width: 24rem;
  height: 6rem;
  border-collapse: collapse;
  border-radius: 0.25rem;
  overflow: hidden; /* to ensure the border-radius applies */

  td {
    width: 8rem;
    height: 3rem;
    text-align: center;
    vertical-align: middle;
    border-right: 1px dashed lightgrey;

    &:last-child {
      border-right: none;
    }
  }

  td.header {
    background-color: lightgrey;
    color: black;
    font-size: 1rem;
  }

  td.data {
    background-color: white;
    color: #2f4252;
    font-size: 1.3rem;
  }
`;

export const Divider = styled.div`
  height: 100%;
  border-left: 1px dashed lightgrey;
  position: absolute;
  top: 0;

  &:nth-of-type(1) {
    left: 8rem;
  }
  &:nth-of-type(2) {
    left: 16rem;
  }
`;
