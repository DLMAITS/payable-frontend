import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import OnboardingWelcomeContainer from "../onboarding/components/onboardingWelcome/OnboardingWelcomeContainer/OnboardingWelcomeContainer";
import OnboardingCompanyContainer from "../onboarding/components/onboardingCompany/OnboardingCompanyContainer/OnboardingCompanyContainer";
import OnboardingCompanyChecksContainer from "../onboarding/components/onboardingCompanyChecks/OnboardingCompanyChecksContainer/OnboardingCompanyChecksContainer";
import OnboardingAccountSetupContainer from "../onboarding/components/onboardingAccountSetup/OnboardingAccountSetupContainer/OnboardingAccountSetupContainer";
import {
  ONBOARDINGWELCOMEROUTE,
  ONBOARDINGCOMPANYROUTE,
  ONBOARDINGCOMPANYFINANCIALSROUTE,
  ONBOARDINGACCOUNTSETUPROUTE
} from "../../constants/Constants";

const OnboardingRoutes = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path={ONBOARDINGWELCOMEROUTE}
          component={OnboardingWelcomeContainer}
        />
        <Route
          exact
          path={ONBOARDINGCOMPANYROUTE}
          component={OnboardingCompanyContainer}
        />
        <Route
          exact
          path={ONBOARDINGCOMPANYFINANCIALSROUTE}
          component={OnboardingCompanyChecksContainer}
        />
        <Route
          exact
          path={ONBOARDINGACCOUNTSETUPROUTE}
          component={OnboardingAccountSetupContainer}
        />
      </Switch>
    </Fragment>
  );
};

export default OnboardingRoutes;
