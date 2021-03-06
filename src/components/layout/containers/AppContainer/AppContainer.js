import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardContainer from "../DashboardContainer/DashboardContainer";
import OnboardingContainer from "../OnboardingContainer/OnboardingContainer";
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
} from "../../../../constants/Constants";
import {
  ONBOARDINGWELCOMEROUTE,
  ONBOARDINGCOMPANYROUTE,
  ONBOARDINGCOMPANYFINANCIALSROUTE,
  ONBOARDINGACCOUNTSETUPROUTE
} from "../../../../constants/Constants";

const AppContainer = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path={[
            ONBOARDINGWELCOMEROUTE,
            ONBOARDINGCOMPANYROUTE,
            ONBOARDINGCOMPANYFINANCIALSROUTE,
            ONBOARDINGACCOUNTSETUPROUTE
          ]}
          component={OnboardingContainer}
        />
        <Route
          exact
          path={[
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
          ]}
          component={DashboardContainer}
        />
      </Switch>
    </Fragment>
  );
};

export default AppContainer;
