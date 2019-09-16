import React from "react";
import NavigationBar from "../../layout/navigation/NavigationBar/NavigationBar";
import {
  INVOICESROUTE,
  INVOICESADDROUTE,
  INVOICESHISTORYROUTE
} from "../../../constants/Constants";

const InvoicesContainer = () => {
  return (
    <div>
      <NavigationBar
        title={"Invoices"}
        headers={{
          Overview: INVOICESROUTE,
          Add: INVOICESADDROUTE,
          History: INVOICESHISTORYROUTE
        }}
      />
    </div>
  );
};

export default InvoicesContainer;
