import React from "react";
import NavigationBar from "../../layout/NavigationBar/NavigationBar";

const InvoicesContainer = () => {
  return (
    <div>
      <NavigationBar
        title={"Invoices"}
        headers={{
          Overview: "/invoices",
          Add: "/invoices/add",
          History: "/invoices/history"
        }}
      />
    </div>
  );
};

export default InvoicesContainer;
