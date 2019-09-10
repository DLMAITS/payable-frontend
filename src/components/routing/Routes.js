import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardHomeContainer from "../dashboardHome/DashboardHomeContainer/DashboardHomeContainer";
import InvoicesContainer from "../invoices/invoicesContainer/invoicesContainer";
import ExchangeContainer from "../exchange/exchangeContainer/exchangeContainer";
import UserContainer from "../user/userContainer/userContainer";
import {
  DASHBOARDHOMEROUTE,
  DASHBOARDHOMEAPPEARANCEROUTE,
  USERROUTE,
  USERACCOUNTSROUTE,
  EXCHANGEROUTE,
  EXCHANGEINBOUNDROUTE,
  EXCHANGEOUTBOUNDROUTE,
  INVOICESROUTE,
  INVOICESADDROUTE,
  INVOICESHISTORYROUTE
} from "../../constants/Constants";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path={[DASHBOARDHOMEROUTE, DASHBOARDHOMEAPPEARANCEROUTE]}
          component={DashboardHomeContainer}
        ></Route>
        <Route
          exact
          path={[INVOICESROUTE, INVOICESADDROUTE, INVOICESHISTORYROUTE]}
          component={InvoicesContainer}
        ></Route>
        <Route
          exact
          path={[EXCHANGEROUTE, EXCHANGEINBOUNDROUTE, EXCHANGEOUTBOUNDROUTE]}
          component={ExchangeContainer}
        ></Route>
        <Route
          exact
          path={[USERROUTE, USERACCOUNTSROUTE]}
          component={UserContainer}
        ></Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;
