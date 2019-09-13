import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardHomeContainer from "../dashboardHome/DashboardHomeContainer/DashboardHomeContainer";
import InvoicesContainer from "../invoices/InvoicesContainer/InvoicesContainer";
import ExchangeContainer from "../exchange/ExchangeContainer/ExchangeContainer";
import UserContainer from "../user/UserContainer/UserContainer";
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

const DashboardRoutes = () => {
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

export default DashboardRoutes;
