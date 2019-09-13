import React from "react";
import "./DashboardContainer.css";
import SideBar from "../SideBar/SideBar";
import DashboardRoutes from "../../routing/DashboardRoutes";
import { Route, Switch } from "react-router-dom";

const DashboardContainer = () => {
  return (
    <div className="dashboard-container dashboard-container-position">
      <SideBar />
      <Switch>
        <Route component={DashboardRoutes} />
      </Switch>
    </div>
  );
};

export default DashboardContainer;
