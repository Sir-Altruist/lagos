import React from "react";
import Header from "../Component/Header";
import BasicTable from "../Component/table/BasicTable";

const Admin2 = () => {
  return (
    <div className="admin">
      <Header />
      <h1 style={{ textAlign: "center", paddingTop: "3rem" }}>
        Payment Confirmation
      </h1>
      <BasicTable />
    </div>
  );
};

export default Admin2;
