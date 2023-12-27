// SubConFinanceInfo/CurrentRatio.tsx
import React from "react";
import { useTable, HeaderGroup, Row, Cell } from "react-table";
import { TableWrapper, Label, LabelBox, StyledTable, Divider } from "./style";

interface TableData {
  [key: string]: number;
}

interface CurrentRatioProps {
  data: TableData;
}

const CurrentRatio: React.FC<CurrentRatioProps> = ({ data }) => {
  // Extract the years and values from the data object
  const columns = Object.keys(data).map((year) => ({
    Header: year,
    accessor: year,
  }));

  const tableData = [
    {
      ...data,
    },
  ];

  // Define the columns for react-table based on the keys in your data
  const reactTableColumns = React.useMemo(
    () =>
      columns.map((col) => ({
        Header: col.Header,
        accessor: col.accessor,
      })),
    [columns]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: reactTableColumns,
      data: tableData,
    });

  return (
    <TableWrapper>
      <Label>
        <LabelBox />
        <span>유동비율</span>
      </Label>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map(
            (headerGroup: HeaderGroup<{ [x: string]: number }>, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps()}
                    className="header"
                    key={index}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            )
          )}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: Row<{ [x: string]: number }>, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map(
                  (cell: Cell<{ [x: string]: number }, number>, index) => (
                    <td {...cell.getCellProps()} className="data" key={index}>
                      {cell.render("Cell")}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default CurrentRatio;
