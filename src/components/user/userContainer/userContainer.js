import React from "react";
import NavigationBar from "../../layout/NavigationBar/NavigationBar";
import { USERROUTE, USERACCOUNTSROUTE } from "../../../constants/Constants";

const UserContainer = () => {
  return (
    <div>
      <NavigationBar
        title={"User"}
        headers={{
          Settings: USERROUTE,
          Accounts: USERACCOUNTSROUTE
        }}
      />
    </div>
  );
};

export default UserContainer;
