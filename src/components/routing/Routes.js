import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardHomeContainer from "../dashboardHome/dashboardHomeContainer/dashboardHomeContainer";
import InvoicesContainer from "../invoices/invoicesContainer/invoicesContainer";
import ExchangeContainer from "../exchange/exchangeContainer/exchangeContainer";
import UserContainer from "../user/userContainer/userContainer";
import {
  DASHBOARDHOMEROUTE,
  USERROUTE,
  EXCHANGEROUTE,
  INVOICESROUTE
} from "../../constants/Constants";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path={DASHBOARDHOMEROUTE}
          component={DashboardHomeContainer}
        ></Route>
        <Route exact path={INVOICESROUTE} component={InvoicesContainer}></Route>
        <Route exact path={EXCHANGEROUTE} component={ExchangeContainer}></Route>
        <Route exact path={USERROUTE} component={UserContainer}></Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;
