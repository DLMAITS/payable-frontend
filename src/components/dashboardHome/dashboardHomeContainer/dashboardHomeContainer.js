import React from "react";
import NavigationBar from "../../layout/navigation/NavigationBar/NavigationBar";
import {
  DASHBOARDHOMEROUTE,
  DASHBOARDHOMEAPPEARANCEROUTE
} from "../../../constants/Constants";

const DashboardHomeContainer = () => {
  return (
    <div>
      <NavigationBar
        title={"Dashboard Home"}
        headers={{
          Overview: DASHBOARDHOMEROUTE,
          Appearance: DASHBOARDHOMEAPPEARANCEROUTE
        }}
      />
    </div>
  );
};

export default DashboardHomeContainer;
