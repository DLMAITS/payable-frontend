import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardContainer from "../DashboardContainer/DashboardContainer";

const AppContainer = () => {
  return (
    <Fragment>
      <Switch>
        <Route component={DashboardContainer} />
      </Switch>
    </Fragment>
  );
};

export default AppContainer;
