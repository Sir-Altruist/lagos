import React, { useState, useEffect, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { COLUMNS } from "./columns";
// import { items } from "../data";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./table.css";
import Filter from "./Filter";
import { Checkbox } from "./Checkbox";
import axios from "axios";
import TableToolbar from "../TableTooltip";
import { Box, Container } from "@mui/material";
// import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const BasicTable = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pin");

        const { data } = response;
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [items.pin]);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => items, [items]);
  const tableInstance = new useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    selectedFlatRows,
  } = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;

  const generatePin = () => {
    console.log(
      selectedFlatRows.map((single) => {
        const pins = { id: single.original._id, pin: uuidv4().substring(0, 5) };
        return pins;
      })
    );
  };
  return (
    <Box component={"div"} style={{ padding: "5rem 0" }}>
      <Container>
        <Filter filter={globalFilter} setFilter={setGlobalFilter} />
        <TableToolbar
          click={selectedFlatRows.length}
          generatePin={generatePin}
        />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowDropDownIcon />
                        ) : (
                          <ArrowDropUpIcon />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="controller">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            style={{ backgroundColor: "teal", color: "white" }}
          >
            {[5, 10, 15].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            style={{ backgroundColor: "teal", color: "white" }}
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            style={{ backgroundColor: "teal", color: "white" }}
          >
            Next
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
        {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2,
            console.log(
              selectedFlatRows.map((single) => {
                const ids = { id: single.original._id };
                return ids;
              })
            ),
            console.log(selectedFlatRows.length)
          )}
        </code>
      </pre> */}
      </Container>
    </Box>
  );
};

export default BasicTable;
