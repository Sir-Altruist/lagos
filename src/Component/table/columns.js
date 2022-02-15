import moment from "moment";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Invoice Number",
    accessor: "invoice",
  },
  {
    Header: "Receipt Number",
    accessor: "transaction",
  },
  {
    Header: "Pin",
    accessor: "pinNum",
  },
  {
    Header: "Date",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return moment(value).format("DD/MM/YYYY");
    },
  },
];
