import moment from "moment";
import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  Column,
} from "react-table";
import * as t from "@/features/notice/types/api";
import UpdateDropdown from "./UpdateDropdown";
import * as hook from "@/features/notice/hooks/notice";

const DataTable = () => {
  const { notices } = hook.useNoticeStore();

  const data = useMemo(() => notices, [notices]);

  const columns: Column<t.NoticeTable>[] = useMemo(
    () => [
      {
        Header: "노출 우선순위",
        accessor: "step",
      },
      {
        Header: "고유번호",
        accessor: "id",
      },
      {
        Header: "타입",
        accessor: "type",
      },
      {
        Header: "제목",
        accessor: "title",
      },
      {
        Header: "공개여부",
        accessor: "exposed",
        Cell: ({ value }) => (value == true ? "공개중" : "미공개"),
      },
      {
        Header: "생성(수정)일자",
        accessor: "date",
        Cell: ({ value }) => moment(value).format("YYYY-MM-DD HH:mm"),
      },
      {
        Header: "",
        id: "actions",
        sortable: false,
        Cell: ({ row, index }) => (
          <UpdateDropdown
            id={row?.values?.id}
            classes={
              index < 2
                ? "top-full mt-1"
                : index >= (data?.length || 0) - 2
                  ? "bottom-full mb-1"
                  : ""
            }
          />
        ),
      },
    ],
    [data],
  );

  const tableInstance = useTable(
    {
      columns,
      data: data as t.NoticeTable[],
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <section className="data-table-common data-table-two rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between border-b border-stroke px-8 pb-4 dark:border-strokedark">
        <div className="w-100">
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full rounded-md border border-stroke px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center font-medium">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-transparent pl-2"
          >
            {[5, 10, 20, 50].map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <p className="pl-2 text-black dark:text-white">Entries Per Page</p>
        </div>
      </div>

      <table
        {...getTableProps()}
        className="datatable-table w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
      >
        <thead>
          {headerGroups.map((headerGroup, key) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={key}>
              {headerGroup.headers.map((column, key) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={key}
                >
                  <div className="flex items-center">
                    <span> {column.render("Header")}</span>

                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill="" />
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={key}>
                {row.cells.map((cell, key) => {
                  return (
                    <td {...cell.getCellProps()} key={key}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between border-t border-stroke px-8 pt-5 dark:border-strokedark">
        <p className="font-medium">
          Showing {pageIndex + 1} 0f {pageOptions.length} pages
        </p>
        <div className="flex">
          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-whiter"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                fill=""
              />
            </svg>
          </button>

          {pageOptions.map((_page, index) => (
            <button
              key={index}
              onClick={() => {
                gotoPage(index);
              }}
              className={`${
                pageIndex === index && "bg-primary text-white"
              } mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-primary hover:text-white`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataTable;
