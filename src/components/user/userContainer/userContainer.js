import React from "react";
import NavigationBar from "../../layout/NavigationBar/NavigationBar";

const UserContainer = () => {
  return (
    <div>
      <NavigationBar
        title={"Settings"}
        headers={{
          Settings: "/settings",
          Accounts: "/settings/accounts"
        }}
      />
    </div>
  );
};

export default UserContainer;
