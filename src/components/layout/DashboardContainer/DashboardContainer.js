import React from "react";
import "./DashboardContainer.css";
import SideBar from "../SideBar/SideBar";
import Routes from "../../routing/Routes";
import { Route, Switch } from "react-router-dom";

const DashboardContainer = () => {
  return (
    <div className="dashboard-container dashboard-container-position">
      <SideBar />
      <Switch>
        <Route component={Routes} />
      </Switch>
    </div>
  );
};

export default DashboardContainer;
