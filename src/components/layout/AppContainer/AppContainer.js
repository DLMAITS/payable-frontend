import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardContainer from "../DashboardContainer/DashboardContainer";
import OnboardingContainer from "../../onboarding/layout/OnboardingContainer/OnboardingContainer";
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
} from "../../../constants/Constants";
import {
  ONBOARDINGWELCOMEROUTE,
  ONBOARDINGIDUPLOADROUTE,
  ONBOARDINGIDEXTRACTIONROUTE,
  ONBOARDINGCOMPANYSEARCHRESULTSROUTE,
  ONBOARDINGCOMPANYEXTRACTIONROUTE,
  ONBOARDINGCOMPANYSHAREHOLDERSROUTE,
  ONBOARDINGCOMPANYCHECKSROUTE,
  ONBOARDINGACCOUNTSETUPROUTE
} from "../../../constants/Constants";

const AppContainer = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path={[
            ONBOARDINGWELCOMEROUTE,
            ONBOARDINGIDUPLOADROUTE,
            ONBOARDINGIDEXTRACTIONROUTE,
            ONBOARDINGCOMPANYSEARCHRESULTSROUTE,
            ONBOARDINGCOMPANYEXTRACTIONROUTE,
            ONBOARDINGCOMPANYSHAREHOLDERSROUTE,
            ONBOARDINGCOMPANYCHECKSROUTE,
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
