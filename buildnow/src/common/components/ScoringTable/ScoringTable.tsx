import React from "react";
import { useTable } from "react-table";
import * as S from "./style";

type TableData = {
  companyname: string;
  operation: string;
  finance: string;
  esg_safety: string;
  others: string;
  total: string;
  result: string;
  state: string;
};

const TableComponent: React.FC<{ data: TableData[] }> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "회사명",
        accessor: "companyname" as keyof TableData,
      },
      {
        Header: "경영일반",
        accessor: "operation" as keyof TableData,
      },
      {
        Header: "재무정보",
        accessor: "finance" as keyof TableData,
      },
      {
        Header: "ESG/안전",
        accessor: "esg_safety" as keyof TableData,
      },
      {
        Header: "기타",
        accessor: "others" as keyof TableData,
      },
      {
        Header: "총점수",
        accessor: "total" as keyof TableData,
        headerStyle: {
          textAlign: "center",
        },
      },
      {
        Header: "평가결과",
        accessor: "result" as keyof TableData,
      },
      {
        Header: "상태",
        accessor: "state" as keyof TableData,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <S.table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <S.Th {...column.getHeaderProps()} columname={column.id}>
                <S.headerLetter>{column.render("Header")} </S.headerLetter>
              </S.Th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="tr">
              {row.cells.map((cell) => {
                const isScoreBox =
                  cell.column.id === "operation" ||
                  cell.column.id === "finance" ||
                  cell.column.id === "esg_safety" ||
                  cell.column.id === "others";
                return (
                  <S.Td {...cell.getCellProps()} columname={cell.column.id}>
                    {isScoreBox ? (
                      <S.ScoreBox score={cell.value} column={cell.column.id}>
                        <S.contentLetter
                          score={cell.value}
                          column={cell.column.id}
                        >
                          {cell.render("Cell")}
                        </S.contentLetter>
                      </S.ScoreBox>
                    ) : (
                      <S.contentLetter
                        score={cell.value}
                        column={cell.column.id}
                      >
                        {cell.render("Cell")}
                      </S.contentLetter>
                    )}
                  </S.Td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </S.table>
  );
};

export default TableComponent;
