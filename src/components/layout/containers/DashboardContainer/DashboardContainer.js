import React from "react";
import SideBar from "../../navigation/SideBar/SideBar";
import DashboardRoutes from "../../../routing/DashboardRoutes";
import { Route, Switch } from "react-router-dom";
import { StyledDashboardContainer } from "./DashboardContainer.styled";

const DashboardContainer = () => {
  return (
    <StyledDashboardContainer>
      <SideBar />
      <Switch>
        <Route component={DashboardRoutes} />
      </Switch>
    </StyledDashboardContainer>
  );
};

export default DashboardContainer;
