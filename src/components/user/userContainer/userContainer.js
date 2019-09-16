import React from "react";
import NavigationBar from "../../layout/navigation/NavigationBar/NavigationBar";
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
