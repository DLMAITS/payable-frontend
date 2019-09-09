import React from "react";
import NavigationBar from "../../layout/NavigationBar/NavigationBar";

const DashboardHomeContainer = () => {
  return (
    <div>
      <NavigationBar
        title={"Dashboard Home"}
        headers={{
          Overview: "/dashboard-home",
          Appearance: "/dashboard-home/appearance"
        }}
      />
    </div>
  );
};

export default DashboardHomeContainer;
