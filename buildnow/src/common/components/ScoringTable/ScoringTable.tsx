import React from "react";
import { useTable } from "react-table";
import * as S from "./style";

type TableData = {
  companyname: string;
  operation: string;
  finance: string;
  esg_safety: string;
  performance: string;
  total: string;
  result: string;
  details: React.ReactNode;
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
        Header: "시공실적",
        accessor: "performance" as keyof TableData,
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
        Header: "비고",
        accessor: "details" as keyof TableData,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <S.table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <S.Th
                {...column.getHeaderProps()}
                key={index}
                columname={column.id}
              >
                <S.headerLetter>{column.render("Header")} </S.headerLetter>
              </S.Th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="tr" key={index}>
              {row.cells.map((cell, index) => {
                const isScoreBox =
                  cell.column.id === "operation" ||
                  cell.column.id === "finance" ||
                  cell.column.id === "esg_safety" ||
                  cell.column.id === "performance";
                return (
                  <S.Td
                    {...cell.getCellProps()}
                    columname={cell.column.id}
                    key={index}
                  >
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
